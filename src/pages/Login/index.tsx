import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useStore } from "effector-react";

import LoginStore from "../../stores/LoginStore/LoginStore";
import LoginUseCAse from "../../useCases/LoginUseCase/LoginUseCase";

import { AuthLayout } from "../../layouts/AuthLayout";

import {
  AuthButton,
  AuthForm,
  AuthFormLink,
  AuthInput,
  FormError,
} from "../../styles/global";

interface FormProps {
  email: string;
  password: string;
}

const formSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export const Login = () => {
  const { isLoading, hasError, errorMessage } = useStore(LoginStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = ({ email, password }: FormProps) => {
    LoginUseCAse.execute({ email, password });
  };

  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <AuthForm onSubmit={handleSubmit(handleLogin)}>
        <AuthInput placeholder="E-mail" {...register("email")} />
        {errors?.email && <FormError>{errors.email.message}</FormError>}

        <AuthInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors?.password && <FormError>{errors.password.message}</FormError>}

        {hasError && <FormError>{errorMessage}</FormError>}

        <AuthFormLink
          href="/new-account"
          children={"Não tem cadastro? Cadastre-se aqui."}
        />
        <AuthButton type="submit">
          {isLoading ? "Carregando..." : "Entrar"}
        </AuthButton>
      </AuthForm>
    </AuthLayout>
  );
};
