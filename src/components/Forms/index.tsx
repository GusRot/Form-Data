import React, { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./style.css";
import NewButton from "./NewButton";

export default function Forms() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [CPF, setCPF] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    function saveValue() {
        if (email !== "" && CPF !== "" && name !== "" && lastName !== "") {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
        console.log(disableButton);
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log([name, lastName, email, CPF, promotions, news]);
            }}
        >
            <TextField
                color="secondary"
                onChange={(event) => {
                    setName(event.target.value);
                    saveValue();
                }}
                id="nome"
                label="Nome"
                required
                margin="normal"
                fullWidth
            />
            <TextField
                color="secondary"
                onChange={(event) => {
                    setLastName(event.target.value);
                    saveValue();
                }}
                id="Sobrenome"
                label="Sobrenome"
                required
                margin="normal"
                fullWidth
            />
            <TextField
                color="secondary"
                onChange={(event) => {
                    setCPF(event.target.value);
                    saveValue();
                }}
                id="CPF"
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
                    saveValue();
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
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="Novidades"
                        checked={news}
                        color="secondary"
                        onChange={(event) => {
                            setNews(event.target.checked);
                        }}
                    />
                }
            />

            <NewButton disableButton={disableButton} />
        </form>
    );
}
