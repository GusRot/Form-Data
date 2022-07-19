import { TextField } from "@mui/material";
import React from "react";

interface InputsProps {
    setVariable: React.Dispatch<React.SetStateAction<string>>;
    variable: any;
    variableString: { name: string; nome: string };
    variableFunction: (
        e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) => void;
    variableType: string;
    variableError?: errorProps;
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
        valid: boolean;
        text: string;
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
            margin="normal"
            fullWidth={width ? true : false}
            id={variableString.name}
            type={variableType}
            label={variableString.nome}
            value={variable}
            required={require ? true : false}
            error={variableError ? !variableError.name.valid : false}
            helperText={variableError ? variableError.name.text : ""}
            inputProps={maxLength ? { maxLength: maxLength } : {}}
            onBlur={(event) => variableFunction(event)}
            onChange={
                mask.mask
                    ? (event) => {
                          mask.maskFunction(event);
                      }
                    : (event) => {
                          setVariable(event.target.value);
                      }
            }
        />
    );
}
