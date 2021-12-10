import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

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
}

export default function NewButton({ disableButton }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disableButton}
            >
                Cadastrar
            </Button>
        </ThemeProvider>
    );
}
