import * as React from "react";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";

const Resgiter = () => {
  return (
    <FormContainer component="form">
      <FormBox>
        <TitleArnia variant="h3">Arnia Trello</TitleArnia>
        <TitleArnia variant="h6">Cadastro</TitleArnia>
      </FormBox>

      <FormBox>
        <FormInput nameInput={"Nome Completo"} />
        <FormInput nameInput={"E-mail"} />
        <FormInput nameInput={"Senha"} />
        <FormInput nameInput={"Repita a sua senha"} />
      </FormBox>

      <FormButton>Cadastrar</FormButton>
    </FormContainer>
  );
};

export default Resgiter;
