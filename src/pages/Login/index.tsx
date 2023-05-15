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
      subtitle="Gerencar suas entradas e saída nunca foi tão simples."
    >
      <AuthForm>
        <AuthInput type="text" placeholder="E-mail" />
        <AuthInput type="password" placeholder="Senha" />
        <AuthFormLink href="/new-account">
          Não tem cadastro? Cadastre-se aqui.
        </AuthFormLink>
        <AuthButton type="submit">Entrar</AuthButton>
      </AuthForm>
    </AuthLayout>
  );
};
