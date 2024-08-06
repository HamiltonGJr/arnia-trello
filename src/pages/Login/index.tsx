import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, LinkBox, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";
import api from "../../data/api";
import { ILogin } from "../../types/pagesType";

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    console.log(data);

    try {
      const loginUser = await api.post("user/login", {
        email: data.email,
        password: data.password,
      });

      if (loginUser) {
        toast.success("Login efetuado com sucesso!");

        const navigation = setTimeout(function () {
          navigate("/todolist");
        }, 4000);

        return navigation;
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <AppContainer>
      <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
        <TitleArnia variant="h3">Arnia Trello</TitleArnia>

        <FormBox>
          <Controller
            key="email"
            name="email"
            control={control}
            rules={{
              required: "O e-mail é obrigatório!",
              minLength: 3,
            }}
            render={({ field }) => (
              <FormInput
                nameInput="E-mail"
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            key="password"
            name="password"
            control={control}
            rules={{
              required: "A senha é obrigatória!",
              minLength: 6,
            }}
            render={({ field }) => (
              <FormInput
                nameInput="Senha"
                isPassword
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </FormBox>

        <FormBox>
          <FormButton type={"submit"}>Entrar</FormButton>
          <LinkBox to={"/register"}>Cadastre-se</LinkBox>
        </FormBox>
      </FormContainer>
    </AppContainer>
  );
};

export default Login;
