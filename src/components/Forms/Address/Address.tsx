import React, { useState } from "react";
import Inputs from "../Inputs";
import NewButton from "../NewButton";

export default function Address() {
    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        console.log(CEP, address);
    }

    const [CEP, setCEP] = useState("");
    const [CEPError, setCEPError] = useState({
        name: { valido: true, texto: "" },
    });
    const [address, setAddress] = useState("");

    function validateCEP(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) {
        if (event.target.value.length === 8) {
            setCEPError({
                name: { valido: true, texto: "" },
            });
        } else {
            setCEPError({
                name: {
                    valido: false,
                    texto: "O CEP deve conter apenas números",
                },
            });
        }
    }

    const inputAddressArray = [
        {
            setVariable: setCEP,
            variableString: { name: "CEP", nome: "CEP" },
            variableFunction: validateCEP,
            variableError: CEPError,
            variableType: "number",
        },
        {
            setVariable: setAddress,
            variableString: { name: "address", nome: "Endereço" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "text",
        },
    ];

    return (
        <form
            onSubmit={(event) => {
                submitForm(event);
            }}
        >
            {inputAddressArray.map((parameter, i) => (
                <Inputs
                    key={"address" + i}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableFunction={parameter.variableFunction}
                    variableError={parameter.variableError}
                    variableType={parameter.variableType}
                />
            ))}

            <NewButton disableButton={false} inner={"Finalizar"} />
        </form>
    );
}
