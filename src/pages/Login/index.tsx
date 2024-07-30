import * as React from "react";
import { Link } from "react-router-dom";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";

const Login = () => {
  return (
    <AppContainer>
      <FormContainer component="form">
        <TitleArnia variant="h3">Arnia Trello</TitleArnia>

        <FormBox>
          <FormInput nameInput={"E-mail"} />
          <FormInput nameInput={"Senha"} isPassword />
        </FormBox>

        <FormBox>
          <FormButton>Entrar</FormButton>
          <Link to={"/register"}>Cadastre-se</Link>
        </FormBox>
      </FormContainer>
    </AppContainer>
  );
};

export default Login;
