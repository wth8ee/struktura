"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity } from "lucide-react";

export default function QuizFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-stone-400 font-medium relative z-10"
    >
      <div className="flex items-center gap-2 bg-white border border-stone-200/60 px-3 py-1.5 rounded-xl shadow-sm">
        <ShieldCheck className="w-4 h-4 text-stone-500" />
        <span>Фиксация цены по договору</span>
      </div>
      <div className="flex items-center gap-2 bg-white border border-stone-200/60 px-3 py-1.5 rounded-xl shadow-sm">
        <Activity className="w-4 h-4 text-stone-500" />
        <span>Цены обновлены сегодня</span>
      </div>
    </motion.div>
  );
}
