import { TextField } from "@mui/material";
import React from "react";

interface InputsProps {
    setVariable: React.Dispatch<React.SetStateAction<string>>;
    variable: any;
    variableString: { name: string; nome: string };
    variableFunction: (
        e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) => void;
    variableError: errorProps | undefined;
    variableType: string;
    require?: boolean;
    width?: boolean;
    maxLength?: number;
    mask?: {
        mask: boolean;
        maskFunction: (
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => void;
    };
}

interface errorProps {
    name: {
        valido: boolean;
        texto: string;
    };
}

export default function Inputs({
    setVariable,
    variable,
    variableString,
    variableFunction,
    variableError,
    variableType,
    require = true,
    width = true,
    maxLength,
    mask = { mask: false, maskFunction: () => {} },
}: InputsProps) {
    return (
        <TextField
            color="secondary"
            onChange={
                mask.mask
                    ? (event) => {
                          mask.maskFunction(event);
                      }
                    : (event) => {
                          setVariable(event.target.value);
                      }
            }
            id={variableString.name}
            error={variableError ? !variableError.name.valido : false}
            helperText={variableError ? variableError.name.texto : ""}
            onBlur={(event) => variableFunction(event)}
            type={variableType}
            label={variableString.nome}
            required={require ? true : false}
            margin="normal"
            fullWidth={width ? true : false}
            inputProps={maxLength ? { maxLength: maxLength } : {}}
            value={variable}
        />
    );
}
