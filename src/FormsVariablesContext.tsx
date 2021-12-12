import React, { createContext, ReactNode, useState } from "react";

interface FormProp {
    children: ReactNode;
}

interface FormsVariablesContextData {
    step: number;
    handleStep: (n: number) => void;
}

export const FormsVariablesContext = createContext<FormsVariablesContextData>(
    {} as FormsVariablesContextData
);

export function VariableFormProvider({ children }: FormProp) {
    const [step, setStep] = useState(0);

    function handleStep(stepN: number) {
        setStep(stepN);
    }

    return (
        <FormsVariablesContext.Provider
            value={{ step: step, handleStep: handleStep }}
        >
            {children}
        </FormsVariablesContext.Provider>
    );
}
