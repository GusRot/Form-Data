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
        checkCEPError(event.target.value.length === 9);
    }

    function maskCEPFunction(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const regex = /[^\d]+/g;
        const CEPString = event.target.value;
        const CEPValue = CEPString.match(regex);

        let regexException = false;
        if (CEPString.length > 5) {
            regexException = CEPString.charAt(5).includes("-");
        }

        if (CEPValue && !regexException) {
            checkCEPError(false);
        } else {
            let CPFMaskedValue = CEPString;
            if (CEPString.length > 5) {
                if (!CEPString.charAt(5).includes("-")) {
                    CPFMaskedValue =
                        CEPString.slice(0, 5) + "-" + CEPString.slice(5);
                } else {
                    CPFMaskedValue =
                        CEPString.slice(0, 6) +
                        CEPString.slice(6).replace(regex, "");
                }
            }
            setCEP(CPFMaskedValue);
            checkCEPError(true);
        }
    }

    function checkCEPError(error: boolean) {
        if (error) {
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
            variable: CEP,
            variableString: { name: "CEP", nome: "CEP" },
            variableFunction: validateCEP,
            variableError: CEPError,
            variableType: "text",
            require: false,
            maxLength: 9,
            mask: { mask: true, maskFunction: maskCEPFunction },
        },
        {
            setVariable: setAddress,
            variable: address,
            variableString: { name: "address", nome: "Endereço Completo" },
            variableFunction: () => {},
            variableError: undefined,
            variableType: "text",
            require: false,
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
                    variable={parameter.variable}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableFunction={parameter.variableFunction}
                    variableError={parameter.variableError}
                    variableType={parameter.variableType}
                    require={parameter.require}
                    maxLength={parameter.maxLength}
                    mask={parameter.mask}
                />
            ))}

            <NewButton disableButton={false} inner={"Finalizar"} />
        </form>
    );
}
