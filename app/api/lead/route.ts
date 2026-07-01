import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = data.name || "Не указано";
    const phone = data.phone || "Не указан";
    const info = data.email || "Нет дополнительных данных";

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Переменные окружения не найдены в .env или на Vercel!");
      return NextResponse.json(
        { error: "Ошибка конфигурации" },
        { status: 500 },
      );
    }

    const message = `Успешный лид из Квиза!\n\nИмя: ${name}\nТелефон: ${phone}\nДанные расчета: ${info}`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Ошибка от Telegram API:", errText);
      throw new Error();
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Критическая ошибка:", error);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}
