"use client";

import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Заявка и расчет",
    desc: "Вы проходите квиз, мы фиксируем цену материалов и закрепляем за вами персональную скидку.",
  },
  {
    num: "02",
    title: "Выезд и обмер",
    desc: "Инженер приезжает на объект, делает лазерный замер и составляет точную итоговую смету.",
  },
  {
    num: "03",
    title: "Дизайн и ремонт",
    desc: "Разрабатываем полный 3D-проект интерьера и реализуем работы строго под ключ с гарантией.",
  },
];

export default function QuizSteps() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-32 px-2 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-2">
          Три шага к новому интерьеру
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm font-medium">
          Прозрачный процесс работы без скрытых переплат и задержек сроков
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm relative group hover:border-stone-400 transition-colors"
          >
            <span className="text-3xl font-black text-stone-200 group-hover:text-zinc-800 transition-colors font-mono block mb-3">
              {step.num}
            </span>
            <h4 className="font-extrabold text-base text-zinc-900 mb-2">
              {step.title}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
