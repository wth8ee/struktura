"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CATEGORIES = [
  { id: "all", title: "Все проекты" },
  { id: "apt", title: "Квартиры" },
  { id: "house", title: "Дома" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Скандинавский минимализм в ЖК Сидней",
    cat: "apt",
    size: "74 м²",
    img: "https://unsplash.com",
  },
  {
    id: 2,
    title: "Индустриальный лофт на Новой Риге",
    cat: "house",
    size: "240 м²",
    img: "https://unsplash.com",
  },
  {
    id: 3,
    title: "Современная классика в Хамовниках",
    cat: "apt",
    size: "115 м²",
    img: "https://unsplash.com",
  },
];

export default function QuizPortfolio() {
  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeCat);

  return (
    <section className="w-full max-w-4xl mx-auto mt-32 px-2 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-2">
          Реализованные объекты
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm font-medium">
          Каждый проект разработан нашей командой от идеи до финальной сдачи
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCat === cat.id
                ? "bg-zinc-900 text-white shadow-sm"
                : "bg-white border border-stone-200 text-stone-500 hover:text-zinc-900"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((proj) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={proj.id}
              className="bg-white border border-stone-200/60 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100 rounded-t-2xl">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded-md font-mono">
                  {proj.size}
                </span>
                <h4 className="font-bold text-sm text-zinc-900 mt-2 leading-snug">
                  {proj.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
