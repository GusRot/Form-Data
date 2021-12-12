import React, { useContext, useState } from "react";
import { FormsVariablesContext } from "../../../FormsVariablesContext";
import Inputs from "../Inputs";
import NewButton from "../NewButton";

export default function Address() {
    const [CEP, setCEP] = useState("");
    const [CEPError, setCEPError] = useState({
        name: { valido: true, texto: "" },
    });
    const [address, setAddress] = useState("");
    const { submitForm } = useContext(FormsVariablesContext);

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
            variableString: { name: "address", nome: "Endereço Completo" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "text",
        },
    ];

    return (
        <form
            onSubmit={(event) => {
                submitForm(event, [CEP, address], 3);
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
