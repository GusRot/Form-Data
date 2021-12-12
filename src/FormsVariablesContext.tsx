import React, { createContext, ReactNode, useState } from "react";

interface FormProp {
    children: ReactNode;
}

interface FormsVariablesContextData {
    step: number;
    handleStep: (n: number) => void;
    submitForm: (
        event: React.FormEvent<HTMLFormElement>,
        arr: Array<string>,
        n: number
    ) => void;
}

export const FormsVariablesContext = createContext<FormsVariablesContextData>(
    {} as FormsVariablesContextData
);

export function VariableFormProvider({ children }: FormProp) {
    const [step, setStep] = useState(0);

    function handleStep(stepN: number) {
        setStep(stepN);
    }

    function submitForm(
        event: React.FormEvent<HTMLFormElement>,
        arr: Array<string>,
        n: number
    ) {
        event.preventDefault();
        console.log(arr);
        handleStep(n);
    }

    return (
        <FormsVariablesContext.Provider
            value={{ step, handleStep, submitForm }}
        >
            {children}
        </FormsVariablesContext.Provider>
    );
}
