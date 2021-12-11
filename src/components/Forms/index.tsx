import React, { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./style.css";
import NewButton from "./NewButton";
import Password from "./Password";

interface submitProp {
    functionSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Forms({ functionSubmitForm }: submitProp) {
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
        console.log(disableButton);
    }, [email, CPF, name, lastName, disableButton, CPFError]);

    return (
        <>
            <form
                onSubmit={(event) => {
                    functionSubmitForm(event);
                }}
            >
                <TextField
                    autoFocus
                    color="secondary"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    id="name"
                    label="Nome"
                    type="text"
                    required
                    margin="normal"
                    fullWidth
                />
                <TextField
                    color="secondary"
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                    id="lastName"
                    label="Sobrenome"
                    type="text"
                    required
                    margin="normal"
                    fullWidth
                />
                <TextField
                    color="secondary"
                    onChange={(event) => {
                        setCPF(event.target.value);
                    }}
                    id="CPF"
                    error={!CPFError.cpf.valido}
                    helperText={CPFError.cpf.texto}
                    onBlur={(event) => validadeCPF(event)}
                    type="number"
                    label="CPF"
                    required
                    margin="normal"
                    fullWidth
                />
                <TextField
                    color="secondary"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    id="email"
                    type="email"
                    label="email"
                    required
                    margin="normal"
                    fullWidth
                />

                <FormControlLabel
                    label="Promoçoes"
                    control={
                        <Switch
                            onChange={(event) => {
                                setPromotions(event.target.checked);
                            }}
                            name="Promoçoes"
                            checked={promotions}
                            color="secondary"
                            type="checkbox"
                        />
                    }
                />

                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                            name="Novidades"
                            checked={news}
                            type="checkbox"
                            color="secondary"
                            onChange={(event) => {
                                setNews(event.target.checked);
                            }}
                        />
                    }
                />

                <NewButton disableButton={disableButton} inner={"Continuar"} />
            </form>
            <Password />
        </>
    );
}
