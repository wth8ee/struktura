"use client";

import React from "react";
import { QuizStepProps } from "@/types/quiz";
import { Home, Building2, LayoutGrid } from "lucide-react";

const OPTIONS = [
  {
    id: "apartment",
    title: "Новостройка",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Черновые и чистовые работы с нуля",
  },
  {
    id: "secondary",
    title: "Вторичное жилье",
    icon: <LayoutGrid className="w-6 h-6" />,
    desc: "Демонтаж старой отделки + ремонт",
  },
  {
    id: "house",
    title: "Загородный дом",
    icon: <Home className="w-6 h-6" />,
    desc: "Большие площади, инженерные сети",
  },
] as const;

export default function StepPropertyType({
  formData,
  updateFields,
  onNext,
}: QuizStepProps) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-zinc-900 mb-1">
        Шаг 1: Тип недвижимости
      </h3>
      <p className="text-stone-400 text-sm mb-8">
        Это определяет базовую сложность проведения черновых работ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {OPTIONS.map((opt) => {
          const isSelected = formData.propertyType === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => {
                updateFields({ propertyType: opt.id });
                setTimeout(onNext, 350);
              }}
              className={`p-6 rounded-2xl border text-left bg-white transition-all duration-200 group cursor-pointer hover:-translate-y-0.5 ${
                isSelected
                  ? "border-zinc-800 ring-4 ring-zinc-100 bg-stone-50/30"
                  : "border-stone-200/80 hover:border-stone-400/60 hover:shadow-md hover:shadow-stone-100"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 transition-colors ${
                  isSelected
                    ? "bg-zinc-900 border-zinc-800 text-white"
                    : "bg-stone-50 border-stone-200 text-stone-500 group-hover:text-stone-700"
                }`}
              >
                {opt.icon}
              </div>
              <h4 className="font-bold text-base text-zinc-900 mb-1">
                {opt.title}
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-medium">
                {opt.desc}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
