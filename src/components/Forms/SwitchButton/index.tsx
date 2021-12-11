import { Switch, FormControlLabel } from "@mui/material";
import React from "react";

interface SwitchButtonProps {
    setVariable: (v: boolean) => void;
    variable: boolean;
    stringVariable: string;
}

export default function SwitchButton({
    setVariable,
    variable,
    stringVariable,
}: SwitchButtonProps) {
    <FormControlLabel
        label={stringVariable}
        control={
            <Switch
                onChange={(event) => {
                    setVariable(event.target.checked);
                }}
                name="Promoçoes"
                checked={variable}
                color="secondary"
                type="checkbox"
            />
        }
    />;
}
