"use client";

import React, { useState } from "react";
import { QuizStepProps } from "@/types/quiz";
import { Loader2, Send } from "lucide-react";

interface StepContactProps extends QuizStepProps {
  totalPrice: number;
}

export default function StepContact({
  formData,
  totalPrice,
  onBack,
}: StepContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: `КВИЗ-РЕМОНТ: ${formData.propertyType} | ${formData.designStyle} | ${formData.area}м² | Смета: ${totalPrice}₽`,
        }),
      });

      if (!response.ok) throw new Error();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center mb-5 mx-auto font-mono text-xl shadow-md">
          ✓
        </div>
        <h4 className="text-2xl font-extrabold text-zinc-900 mb-2">
          Смета зафиксирована!
        </h4>
        <p className="text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
          Мы закрепили за вами предварительную стоимость ремонта в размере{" "}
          <span className="font-bold text-zinc-900">
            {totalPrice.toLocaleString("ru-RU")} ₽
          </span>
          . Подробный PDF-расчет материалов прилетит вам в WhatsApp в течение 5
          минут.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-zinc-900 mb-1">
        Финальный шаг: Получить расчет
      </h3>
      <p className="text-stone-400 text-sm mb-8">
        Введите ваши контакты, чтобы закрепить цену со скидкой и получить
        подробную смету.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-widest">
            Ваше имя
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Иванов"
            className="w-full bg-white border border-stone-200/80 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-stone-300 focus:outline-none focus:border-zinc-800 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-widest">
            Номер телефона
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (999) 123-45-67"
            className="w-full bg-white border border-stone-200/80 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-stone-300 focus:outline-none focus:border-zinc-800 transition-colors"
          />
        </div>

        {status === "error" && (
          <div className="p-3.5 rounded-xl bg-red-50 text-xs text-red-600 border border-red-100 font-semibold text-center">
            Ошибка сети. Проверьте прокси-зеркало бэкенда.
          </div>
        )}

        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-zinc-900 hover:border-stone-400 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-98"
          >
            Назад
          </button>

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all flex items-center gap-2 text-xs shadow-sm disabled:opacity-50 active:scale-98 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Отправка сметы...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Получить PDF-смету</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
