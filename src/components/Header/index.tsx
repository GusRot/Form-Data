import { Typography } from "@mui/material";
import React from "react";

export default function Header() {
    return (
        <header>
            <Typography sx={{ m: 2 }} align="center" color="info" variant="h5">
                Formulario de Cadastro
            </Typography>
        </header>
    );
}
