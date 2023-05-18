import {
  AuthButton,
  AuthForm,
  AuthFormLink,
  AuthInput,
} from "../../styles/global";

import { AuthLayout } from "../../layouts/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <AuthForm>
        <AuthInput type="text" placeholder="E-mail" />
        <AuthInput type="password" placeholder="Senha" />
        <AuthFormLink
          href="/new-account"
          children={"Não tem cadastro? Cadastre-se aqui."}
        />
        <AuthButton type="submit">Entrar</AuthButton>
      </AuthForm>
    </AuthLayout>
  );
};
