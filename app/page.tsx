"use client";

import React from "react";
import QuizWizard from "@/components/QuizWizard";
import QuizFooter from "@/components/QuizFooter";
import QuizHeader from "@/components/QuizHeader";
import QuizSteps from "@/components/QuizSteps";
import QuizPortfolio from "@/components/QuizPortfolio";
export default function Home() {
  return (
    // Переключаем всю страницу в благородный светлый режим (молочный фон)
    <main className="relative min-h-screen bg-[#faf9f6] text-zinc-800 flex flex-col items-center justify-center px-4 py-16 overflow-hidden selection:bg-zinc-200">
      {/* Мягкие, едва заметные светлые градиенты на фоне для объема */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-100/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-stone-200/50 blur-[120px] rounded-full pointer-events-none" />

      <QuizHeader />

      <QuizWizard />

      <QuizPortfolio />

      <QuizSteps />

      <QuizFooter />
    </main>
  );
}
