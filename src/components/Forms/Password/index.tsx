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
        name: { valid: true, text: "" },
    });
    const [passwordConfirmError, setPasswordConfirmError] = useState({
        name: { valid: true, text: "" },
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
                    valid: false,
                    text: "A senha deve ter pelo menos 8 digitos",
                },
            });
        } else {
            setPasswordError({
                name: { valid: true, text: "" },
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
                name: { valid: true, text: "" },
            });
        }
    }

    function PasswordConfirmError() {
        setPasswordConfirmError({
            name: {
                valid: false,
                text: "As senhas devem ser iguais",
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
                variable={password}
                setVariable={setPassword}
                variableString={{ name: "password", nome: "Senha" }}
                variableFunction={validadepassword}
                variableError={passwordError}
                variableType={"password"}
            />

            <Inputs
                variable={passwordConfirm}
                setVariable={setPasswordConfirm}
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
