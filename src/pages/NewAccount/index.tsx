import { useStore } from "effector-react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import NewAccountStore from "../../stores/NewAccountStore/NewAccountStore";
import NewAccountUseCase from "../../useCases/NewAccountUseCase/NewAccountUseCase";

import { AuthLayout } from "../../layouts/AuthLayout";

import {
  AuthButton,
  AuthForm,
  AuthFormLink,
  AuthInput,
  FormError,
} from "../../styles/global";

interface FormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("A confirmação de senha é obrigatória"),
  })
  .required();

export const NewAccount = () => {
  const { isLoading, hasError, errorMessage } = useStore(NewAccountStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  function handleNewAccount({
    name,
    email,
    password,
    confirmPassword,
  }: FormProps) {
    NewAccountUseCase.execute({ name, email, password, confirmPassword });
  }

  return (
    <AuthLayout
      title="Cadastro"
      subtitle="Crie sua conta e comece a gerenciar suas finanças."
    >
      <AuthForm onSubmit={handleSubmit(handleNewAccount)}>
        <AuthInput
          type="text"
          placeholder="Nome e Sobrenome"
          {...register("name")}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}

        <AuthInput placeholder="E-mail" {...register("email")} />
        {errors.email && <FormError>{errors.email.message}</FormError>}

        <AuthInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && <FormError>{errors.password.message}</FormError>}

        <AuthInput
          type="password"
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <FormError>{errors.confirmPassword.message}</FormError>
        )}

        {hasError && <FormError>{errorMessage}</FormError>}

        <AuthFormLink
          to="/login"
          children={"Já possui conta? Faça login aqui."}
        />
        <AuthButton type="submit">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </AuthButton>
      </AuthForm>
    </AuthLayout>
  );
};
