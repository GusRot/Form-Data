import React from "react";
import Forms from "./components/Forms";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { VariableForm } from "./FormContext";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FBBB57",
            light: "#999999",
            dark: "#999999",
        },
        secondary: {
            main: "#07E78E",
            light: "#999999",
            dark: "#999999",
        },
        info: {
            main: "#242424",
            light: "#999999",
            dark: "#999999",
        },
    },
    typography: {
        fontSize: 15,
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <VariableForm>
                    <Header />
                    <Container component={"main"} maxWidth={"sm"}>
                        <Forms />
                    </Container>
                </VariableForm>
            </ThemeProvider>
        </>
    );
}

export default App;
