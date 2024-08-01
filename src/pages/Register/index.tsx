import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";
import api from "../../data/api";

const Resgiter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleOnClickRegister = async () => {
    if (password !== repeatPassword) {
      console.log("Senha incorreta");
      return;
    }

    try {
      const user = await api.post("user", {
        email: email,
        name: fullName,
        password: password,
      });

      if (user) {
        return navigate("/");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <AppContainer>
      <FormContainer component="form">
        <FormBox>
          <TitleArnia variant="h3">Arnia Trello</TitleArnia>
          <TitleArnia variant="h6">Cadastro</TitleArnia>
        </FormBox>

        <FormBox>
          <FormInput
            nameInput={"Nome Completo"}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FormInput
            nameInput={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            nameInput={"Senha"}
            isPassword
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            nameInput={"Repita a sua senha"}
            isPassword
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </FormBox>

        <FormButton onClick={handleOnClickRegister}>Cadastrar</FormButton>
      </FormContainer>
    </AppContainer>
  );
};

export default Resgiter;
