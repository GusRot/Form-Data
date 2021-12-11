import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewButton from "../NewButton";

export default function Password() {
    const [password, setPassword] = useState("");
    const [activeButton, setActiveButton] = useState(true);

    useEffect(() => {
        if (password.length >= 8) {
            setActiveButton(false);
        } else {
            setActiveButton(true);
        }
    }, [password, activeButton]);

    const [passwordError, setPasswordError] = useState({
        password: { valido: true, texto: "" },
    });

    function validadepassword(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (event.target.value.length !== 8) {
            setPasswordError({
                password: {
                    valido: false,
                    texto: "O password deve ter pelo menos 8 digitos",
                },
            });
        } else {
            setPasswordError({
                password: { valido: true, texto: "" },
            });
        }
    }

    return (
        <form>
            <TextField
                autoFocus
                color="secondary"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                id="password"
                label="Senha"
                type="password"
                error={!passwordError.password.valido}
                helperText={passwordError.password.texto}
                onBlur={(event) => validadepassword(event)}
                required
                margin="normal"
                fullWidth
            ></TextField>

            <NewButton disableButton={activeButton} inner={"Continuar"} />
        </form>
    );
}
