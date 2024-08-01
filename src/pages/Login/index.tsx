import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, LinkBox, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";
import api from "../../data/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleOnClickLogin = async () => {
    try {
      const loginUser = await api.post("user/login", {
        email: email,
        password: password,
      });

      if (loginUser) {
        return navigate("/todolist");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <AppContainer>
      <FormContainer component="form">
        <TitleArnia variant="h3">Arnia Trello</TitleArnia>

        <FormBox>
          <FormInput
            nameInput={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            nameInput={"Senha"}
            isPassword
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormBox>

        <FormBox>
          <FormButton onClick={handleOnClickLogin}>Entrar</FormButton>
          <LinkBox to={"/register"}>Cadastre-se</LinkBox>
        </FormBox>
      </FormContainer>
    </AppContainer>
  );
};

export default Login;
