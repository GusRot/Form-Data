import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormsVariablesContext } from "../../FormsVariablesContext";
import Address from "./Address/Address";
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
            default:
                return (
                    <Typography>Erro ao exibir, recarregue a página</Typography>
                );
        }
    }

    return <>{currentStep(step)}</>;
}
