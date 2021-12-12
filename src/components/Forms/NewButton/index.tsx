import { Button, createTheme, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import { FormsVariablesContext } from "../../../FormsVariablesContext";
import "./style.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#13274A",
            light: "#999999",
            dark: "#1C0361",
        },
        action: {
            disabled: "rgba(36,36,36,0.5)",
            disabledBackground: "rgba(232,232,232,0.9)",
        },
    },
});

interface Props {
    disableButton: boolean;
    inner: string;
}

export default function NewButton({ disableButton, inner }: Props) {
    const { handleStep, step } = useContext(FormsVariablesContext);
    const previousStep = step - 1;

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="medium"
                disabled={disableButton}
            >
                {inner}
            </Button>

            <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                fullWidth
                size="medium"
                disabled={previousStep >= 0 ? false : true}
                onClick={() => handleStep(previousStep)}
            >
                Voltar
            </Button>
        </ThemeProvider>
    );
}

//endIcon={<SendIcon />}
