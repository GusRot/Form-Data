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
        name: { valido: true, texto: "" },
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
                name: { valido: false, texto: "O CPF deve ter 11 digitos" },
            });
        } else {
            setCPFError({
                name: { valido: true, texto: "" },
            });
        }
    }

    useEffect(() => {
        if (
            email !== "" &&
            CPF !== "" &&
            name !== "" &&
            lastName !== "" &&
            CPFError.name.valido === true
        ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, CPF, name, lastName, disableButton, CPFError]);

    const switchButtonArray = [
        {
            setVariable: setPromotions,
            variable: promotions,
            stringVariable: "Promotions",
        },
        {
            setVariable: setNews,
            variable: news,
            stringVariable: "Novidades",
        },
    ];

    const inputsArray = [
        {
            setVariable: setName,
            variableString: { name: "Name", nome: "Nome" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "text",
        },
        {
            setVariable: setLastName,
            variableString: { name: "lastName", nome: "Sobrenome" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "text",
        },
        {
            setVariable: setCPF,
            variableString: { name: "CPF", nome: "CPF" },
            variableFunction: validadeCPF,
            variableError: CPFError,
            variableType: "number",
        },
        {
            setVariable: setEmail,
            variableString: { name: "email", nome: "email" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "email",
        },
    ];

    return (
        <form
            onSubmit={(event) => {
                submitForm(event);
            }}
        >
            {inputsArray.map((parameter, i) => (
                <Inputs
                    key={parameter.variableType + i}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableFunction={parameter.variableFunction}
                    variableError={parameter.variableError}
                    variableType={parameter.variableType}
                />
            ))}

            {switchButtonArray.map((parameter, i) => (
                <SwitchButton
                    key={parameter.stringVariable + i}
                    setVariable={parameter.setVariable}
                    variable={parameter.variable}
                    stringVariable={parameter.stringVariable}
                />
            ))}

            <NewButton disableButton={disableButton} inner={"Continuar"} />
        </form>
    );
}
