"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function QuizHeader() {
  return (
    <div className="text-center mb-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-stone-600 text-xs font-medium shadow-sm mb-5"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        <span>Архитектурное бюро STRUKTURA</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.2] mb-4 font-sans"
      >
        Рассчитайте точную стоимость <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-zinc-800 to-stone-600">
          вашего ремонта за 60 секунд
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto text-sm sm:text-base text-stone-500 font-medium leading-relaxed"
      >
        Ответьте на 3 простых вопроса, чтобы зафиксировать за собой цену
        материалов со скидкой до 20% и получить смету.
      </motion.p>
    </div>
  );
}
