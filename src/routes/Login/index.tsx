import * as React from "react";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";

const Login = () => {
  return (
    <FormContainer component="form">
      <TitleArnia variant="h3">Arnia Trello</TitleArnia>

      <FormBox>
        <FormInput nameInput={"E-mail"} />
        <FormInput nameInput={"Senha"} />
      </FormBox>

      <FormBox>
        <FormButton>Entrar</FormButton>
        <a href="">Cadastre-se</a>
      </FormBox>
    </FormContainer>
  );
};

export default Login;
