import * as React from "react";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";

const Resgiter = () => {
  return (
    <AppContainer>
      <FormContainer component="form">
        <FormBox>
          <TitleArnia variant="h3">Arnia Trello</TitleArnia>
          <TitleArnia variant="h6">Cadastro</TitleArnia>
        </FormBox>

        <FormBox>
          <FormInput nameInput={"Nome Completo"} />
          <FormInput nameInput={"E-mail"} />
          <FormInput nameInput={"Senha"} isPassword />
          <FormInput nameInput={"Repita a sua senha"} isPassword />
        </FormBox>

        <FormButton>Cadastrar</FormButton>
      </FormContainer>
    </AppContainer>
  );
};

export default Resgiter;