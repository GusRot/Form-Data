import React, { useEffect, useState } from "react";
import "./style.css";
import NewButton from "../NewButton";
import SwitchButton from "../SwitchButton";
import Inputs from "../Inputs";

export default function SignIn() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [CPF, setCPF] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    const [CPFError, setCPFError] = useState({
        cpf: { valido: true, texto: "" },
    });

    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log([name, lastName, email, CPF, promotions, news]);
    }

    function validadeCPF(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (event.target.value.length !== 11) {
            setCPFError({
                cpf: { valido: false, texto: "O CPF deve ter 11 digitos" },
            });
        } else {
            setCPFError({
                cpf: { valido: true, texto: "" },
            });
        }
    }

    useEffect(() => {
        if (
            email !== "" &&
            CPF !== "" &&
            name !== "" &&
            lastName !== "" &&
            CPFError.cpf.valido === true
        ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, CPF, name, lastName, disableButton, CPFError]);

    return (
        <>
            <form
                onSubmit={(event) => {
                    submitForm(event);
                }}
            >
                <Inputs
                    setVariable={setName}
                    variableString={{ name: "Name", nome: "Nome" }}
                    variableFunction={() => {}}
                    variableError={undefined}
                    variableType={"text"}
                />

                <Inputs
                    setVariable={setLastName}
                    variableString={{ name: "lastName", nome: "Sobrenome" }}
                    variableFunction={() => {}}
                    variableError={undefined}
                    variableType={"text"}
                />

                <Inputs
                    setVariable={setCPF}
                    variableString={{ name: "CPF", nome: "CPF" }}
                    variableFunction={validadeCPF}
                    variableError={CPFError}
                    variableType={"number"}
                />

                <Inputs
                    setVariable={setEmail}
                    variableString={{ name: "email", nome: "email" }}
                    variableFunction={() => {}}
                    variableError={undefined}
                    variableType={"email"}
                />

                <SwitchButton
                    setVariable={setPromotions}
                    variable={promotions}
                    stringVariable="Promotions"
                />

                <SwitchButton
                    setVariable={setNews}
                    variable={news}
                    stringVariable="Novidades"
                />

                <NewButton disableButton={disableButton} inner={"Continuar"} />
            </form>
        </>
    );
}
