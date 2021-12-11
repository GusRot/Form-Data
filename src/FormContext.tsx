import React, { createContext, ReactNode } from "react";

interface FormProp {
    children: ReactNode;
}

interface FormsVariablesContextData {
    text: string;
}

export const FormsVariables = createContext<FormsVariablesContextData>(
    {} as FormsVariablesContextData
);

export function VariableForm({ children }: FormProp) {
    const text = "s";

    return (
        <FormsVariables.Provider
            value={{
                text,
            }}
        >
            {children}
        </FormsVariables.Provider>
    );
}
