import React, { useEffect, useState } from "react";
import Inputs from "../Inputs";
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
        name: { valido: true, texto: "" },
    });

    function validadepassword(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (event.target.value.length !== 8) {
            setPasswordError({
                name: {
                    valido: false,
                    texto: "O password deve ter pelo menos 8 digitos",
                },
            });
        } else {
            setPasswordError({
                name: { valido: true, texto: "" },
            });
        }
    }

    return (
        <form>
            <Inputs
                setVariable={setPassword}
                variableString={{ name: "password", nome: "Senha" }}
                variableFunction={validadepassword}
                variableError={passwordError}
                variableType={"password"}
            />

            <NewButton disableButton={activeButton} inner={"Continuar"} />
        </form>
    );
}
