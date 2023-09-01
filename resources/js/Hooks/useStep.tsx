import { ReactElement } from "react";
import { useState } from "react";

export default function useStep(steps: ReactElement[] | React.ReactNode[]) {
    const [currentStep, setCurrentStep] = useState(0);

    const next = () =>
        setCurrentStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));

    const prev = () => setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

    const goToStep = (index: number) => setCurrentStep(index);

    return {
        currentStep: currentStep + 1,
        step: steps[currentStep],
        steps,
        goToStep,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
        nextStep: {
            onClick: next,
            disabled: currentStep === steps.length - 1,
        },
        prevStep: {
            onClick: prev,
            disabled: currentStep === 0,
        },
    };
}
