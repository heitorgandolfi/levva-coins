import {
  AuthButton,
  AuthForm,
  AuthFormLink,
  AuthInput,
} from "../../styles/global";

import { AuthLayout } from "../../layouts/AuthLayout";

export const NewAccount = () => {
  return (
    <AuthLayout
      title="Cadastro"
      subtitle="Crie sua conta e comece a gerenciar suas finanças."
    >
      <AuthForm>
        <AuthInput type="text" placeholder="Nome e Sobrenome" />
        <AuthInput type="text" placeholder="E-mail" />
        <AuthInput type="password" placeholder="Senha" />
        <AuthInput type="password" placeholder="Confirme a senha" />
        <AuthFormLink href="/login">
          Já possui conta? Faça login aqui.
        </AuthFormLink>
        <AuthButton>Criar conta</AuthButton>
      </AuthForm>
    </AuthLayout>
  );
};
