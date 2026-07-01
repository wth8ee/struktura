"use client";

import React from "react";
import { QuizStepProps } from "@/types/quiz";
import { Palette, Layers, Sun, Gem } from "lucide-react";

const OPTIONS = [
  {
    id: "minimalism",
    title: "Минимализм",
    icon: <Sun className="w-6 h-6" />,
    desc: "Строгие линии, максимум пространства и света",
  },
  {
    id: "loft",
    title: "Индустриальный лофт",
    icon: <Layers className="w-6 h-6" />,
    desc: "Кирпич, металл, открытые коммуникации",
  },
  {
    id: "scandi",
    title: "Скандинавский",
    icon: <Palette className="w-6 h-6" />,
    desc: "Уют, натуральное дерево, светлые тона",
  },
  {
    id: "classic",
    title: "Современная классика",
    icon: <Gem className="w-6 h-6" />,
    desc: "Дорогие материалы, лепнина, симметрия",
  },
] as const;

export default function StepDesignStyle({
  formData,
  updateFields,
  onNext,
  onBack,
}: QuizStepProps) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-zinc-900 mb-1">
        Шаг 2: Стиль интерьера
      </h3>
      <p className="text-stone-400 text-sm mb-8">
        От стиля зависит средняя стоимость чистовых отделочных материалов за
        кв.м.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OPTIONS.map((opt) => {
          const isSelected = formData.designStyle === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => {
                updateFields({ designStyle: opt.id });
                setTimeout(onNext, 350);
              }}
              className={`p-5 rounded-2xl border text-left bg-white transition-all duration-200 group cursor-pointer hover:-translate-y-0.5 ${
                isSelected
                  ? "border-zinc-800 ring-4 ring-zinc-100 bg-stone-50/30"
                  : "border-stone-200/80 hover:border-stone-400/60 hover:shadow-md hover:shadow-stone-100"
              }`}
            >
              <div className="flex gap-4 items-center">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                    isSelected
                      ? "bg-zinc-900 border-zinc-800 text-white"
                      : "bg-stone-50 border-stone-200 text-stone-500"
                  }`}
                >
                  {opt.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-zinc-900">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 leading-snug font-medium">
                    {opt.desc}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-start mt-8">
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-zinc-900 hover:border-stone-400 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-98"
        >
          Назад
        </button>
      </div>
    </div>
  );
}
