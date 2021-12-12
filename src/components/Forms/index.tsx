import { Container, Divider, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext } from "react";
import { FormsVariablesContext } from "../../FormsVariablesContext";
import Address from "./Address/Address";
import DefaultError from "./DefaultError";
import EndForms from "./EndForms";
import Password from "./Password";
import SignIn from "./SignIn";

export default function Forms() {
    const { step } = useContext(FormsVariablesContext);

    function currentStep(current: number) {
        switch (current) {
            case 0:
                return <SignIn />;
            case 1:
                return <Password />;
            case 2:
                return <Address />;
            case 3:
                return <EndForms />;
            default:
                return <DefaultError />;
        }
    }

    return (
        <>
            <Stepper activeStep={step}>
                <Step>
                    <StepLabel>Cadastro</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Criar_Senha</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Endereço</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Conclusão</StepLabel>
                </Step>
            </Stepper>
            <Divider variant="middle" sx={{ mt: 2 }} />
            <Container>{currentStep(step)}</Container>
        </>
    );
}
