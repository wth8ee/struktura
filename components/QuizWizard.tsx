"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizState } from "@/types/quiz";
import { PROPERTY_COEFFICIENTS, STYLE_PRICES } from "@/config/quizPrices";
import StepDesignStyle from "./StepDesignStyle";
import StepPropertyType from "./StepPropertyType";
import StepArea from "./StepArea";
import StepContact from "./StepContact";

export default function QuizWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuizState>({
    propertyType: null,
    designStyle: null,
    area: 45,
  });

  const updateFields = (fields: Partial<QuizState>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const calculateTotalPrice = () => {
    const basePrice = formData.designStyle
      ? STYLE_PRICES[formData.designStyle]
      : 5000;
    const coefficient = formData.propertyType
      ? PROPERTY_COEFFICIENTS[formData.propertyType]
      : 1.0;
    return Math.round(basePrice * formData.area * coefficient);
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const total = calculateTotalPrice();

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-stone-200/80 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] z-10">
      <div className="w-full bg-stone-100 h-1 rounded-full mb-10 overflow-hidden relative z-10">
        <motion.div
          className="bg-zinc-800 h-full rounded-full"
          animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="min-h-[340px] flex flex-col justify-between relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StepPropertyType
                formData={formData}
                updateFields={updateFields}
                onNext={nextStep}
              />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StepDesignStyle
                formData={formData}
                updateFields={updateFields}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StepArea
                formData={formData}
                updateFields={updateFields}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StepContact
                formData={formData}
                updateFields={updateFields}
                onNext={nextStep}
                onBack={prevStep}
                totalPrice={total}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 pt-6 border-t border-stone-100 flex justify-between items-center relative z-10">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
          Предварительный расчет:
        </span>
        <motion.span
          key={total}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight"
        >
          ~ {total.toLocaleString("ru-RU")} ₽
        </motion.span>
      </div>
    </div>
  );
}
