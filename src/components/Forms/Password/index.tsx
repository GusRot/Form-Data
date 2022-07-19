import React, { useContext, useEffect, useState } from "react";
import { FormsVariablesContext } from "../../../FormsVariablesContext";
import Inputs from "../Inputs";
import NewButton from "../NewButton";

export default function Password() {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [activeButton, setActiveButton] = useState(true);
    const { submitForm } = useContext(FormsVariablesContext);
    const [passwordError, setPasswordError] = useState({
        name: { valido: true, texto: "" },
    });
    const [passwordConfirmError, setPasswordConfirmError] = useState({
        name: { valido: true, texto: "" },
    });

    useEffect(() => {
        if (password.length >= 8 && passwordConfirm.length >= 8) {
            setActiveButton(false);
        } else {
            setActiveButton(true);
        }
    }, [password, activeButton, passwordConfirm]);

    function validadepassword(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (event.target.value.length < 8) {
            setPasswordError({
                name: {
                    valido: false,
                    texto: "A senha deve ter pelo menos 8 digitos",
                },
            });
        } else {
            setPasswordError({
                name: { valido: true, texto: "" },
            });
        }
    }

    function validadepasswordConfirm(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (password !== passwordConfirm) {
            PasswordConfirmError();
        } else {
            setPasswordConfirmError({
                name: { valido: true, texto: "" },
            });
        }
    }

    function PasswordConfirmError() {
        setPasswordConfirmError({
            name: {
                valido: false,
                texto: "As senhas devem ser iguais",
            },
        });
    }

    function checkSubmit(event: React.FormEvent<HTMLFormElement>) {
        if (password === passwordConfirm) {
            submitForm(event, [password], 2);
        } else {
            event.preventDefault();
            PasswordConfirmError();
        }
    }

    return (
        <form
            onSubmit={(event) => {
                checkSubmit(event);
            }}
        >
            <Inputs
                setVariable={setPassword}
                variable={password}
                variableString={{ name: "password", nome: "Senha" }}
                variableFunction={validadepassword}
                variableError={passwordError}
                variableType={"password"}
            />

            <Inputs
                setVariable={setPasswordConfirm}
                variable={passwordConfirm}
                variableString={{
                    name: "passwordConfirm",
                    nome: "Confirmar Senha",
                }}
                variableFunction={validadepasswordConfirm}
                variableError={passwordConfirmError}
                variableType={"password"}
            />

            <NewButton disableButton={activeButton} inner={"Continuar"} />
        </form>
    );
}
