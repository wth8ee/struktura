"use client";

import React from "react";
import { QuizStepProps } from "@/types/quiz";
import { MoveRight } from "lucide-react";

export default function StepArea({
  formData,
  updateFields,
  onNext,
  onBack,
}: QuizStepProps) {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ area: Number(e.target.value) });
  };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-zinc-900 mb-1">
        Шаг 3: Площадь помещения
      </h3>
      <p className="text-stone-400 text-sm mb-10">
        Площадь напрямую влияет на итоговый объем закупки строительных
        материалов.
      </p>

      <div className="flex flex-col items-center justify-center bg-stone-50/50 border border-stone-100 rounded-2xl p-8 mb-6">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-5xl md:text-6xl font-black text-zinc-950 tracking-tight">
            {formData.area}
          </span>
          <span className="text-lg font-bold text-stone-400">м²</span>
        </div>

        <input
          type="range"
          min="20"
          max="200"
          step="1"
          value={formData.area}
          onChange={handleSliderChange}
          className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-zinc-900 focus:outline-none"
        />

        <div className="w-full flex justify-between text-[11px] text-stone-400 font-mono mt-3 px-0.5">
          <span>20 м²</span>
          <span>110 м²</span>
          <span>200 м²</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-zinc-900 hover:border-stone-400 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-98"
        >
          Назад
        </button>
        <button
          onClick={onNext}
          className="group px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all flex items-center gap-2 cursor-pointer text-xs shadow-sm active:scale-98"
        >
          Далее
          <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
