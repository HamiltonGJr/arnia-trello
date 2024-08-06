import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormBox, FormContainer, TitleArnia } from "./style";
import { AppContainer } from "../../styles/BoryStyles";
import api from "../../data/api";
import { IRegister } from "../../types/pagesType";

const Resgiter = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    console.log(data);

    if (data.password !== data.repeatPassword) {
      toast.error("Senha incorreta!");
      return;
    }

    try {
      const user = await api.post("user", {
        email: data.email,
        name: data.fullName,
        password: data.password,
      });

      if (user) {
        toast.success("Cadastro efetuado com sucesso!");

        const navigation = setTimeout(function () {
          navigate("/");
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
        <FormBox>
          <TitleArnia variant="h3">Arnia Trello</TitleArnia>
          <TitleArnia variant="h6">Cadastro</TitleArnia>
        </FormBox>

        <FormBox>
          <Controller
            key="fullName"
            name="fullName"
            control={control}
            rules={{
              required: "O nome é obrigatório!",
              minLength: 3,
            }}
            render={({ field }) => (
              <FormInput
                nameInput="Nome*"
                {...field}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            )}
          />
          <Controller
            key="email"
            name="email"
            control={control}
            rules={{
              required: "O e-mail é obrigatório!",
            }}
            render={({ field }) => (
              <FormInput
                nameInput="E-mail*"
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
              required:
                "A senha é obrigatória! É nescessario ter mais de 06 caracteres!",
              minLength: 6,
            }}
            render={({ field }) => (
              <FormInput
                nameInput="Senha*"
                isPassword
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Controller
            key="repeatPassword"
            name="repeatPassword"
            control={control}
            rules={{
              required: "Repetir a senha é obrigatório!",
              minLength: 6,
            }}
            render={({ field }) => (
              <FormInput
                nameInput="Repita a sua senha*"
                isPassword
                {...field}
                error={!!errors.repeatPassword}
                helperText={errors.repeatPassword?.message}
              />
            )}
          />
        </FormBox>

        <FormButton type={"submit"}>Cadastrar</FormButton>
      </FormContainer>
    </AppContainer>
  );
};

export default Resgiter;
