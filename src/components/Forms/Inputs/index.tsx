import { TextField } from "@mui/material";
import React from "react";

interface InputsProps {
    setVariable: React.Dispatch<React.SetStateAction<string>>;
    variableString: { name: string; nome: string };
    variableFunction: (
        e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) => void;
    variableError: errorProps | undefined;
    variableType: string;
}

interface errorProps {
    name: {
        valido: boolean;
        texto: string;
    };
}

export default function Inputs({
    setVariable,
    variableString,
    variableFunction,
    variableError,
    variableType,
}: InputsProps) {
    return (
        <TextField
            color="secondary"
            onChange={(event) => {
                setVariable(event.target.value);
            }}
            id={variableString.name}
            error={variableError ? !variableError.name.valido : false}
            helperText={variableError ? variableError.name.texto : ""}
            onBlur={(event) => variableFunction(event)}
            type={variableType}
            label={variableString.nome}
            required
            margin="normal"
            fullWidth
        />
    );
}
