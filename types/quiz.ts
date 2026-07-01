export interface QuizState {
  propertyType: "apartment" | "secondary" | "house" | null;
  designStyle: "minimalism" | "loft" | "scandi" | "classic" | null;
  area: number;
}

export interface QuizStepProps {
  formData: QuizState;
  updateFields: (fields: Partial<QuizState>) => void;
  onNext: () => void;
  onBack?: () => void;
}
