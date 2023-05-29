import { ReactNode } from "react";

import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import { router } from "../../Router";

import { Modal } from "../Modal";

import {
  HeaderContainer,
  HeaderContent,
  InteractWrapper,
  NewCategoryButton,
  NewTransactionButton,
  SignOutButton,
  UserAvatar,
} from "./styles";

import {
  AuthForm,
  TransactionTypeButton,
  TransactionTypeContainer,
  AuthInput,
  AuthButton,
} from "../../styles/global";

import levvaCoinsLogo from "../../assets/logo.svg";


export const Header = () => {
  const newCategoryButton: ReactNode = (
    <NewCategoryButton>Nova Categoria</NewCategoryButton>
  );

  const newTransactionButton: ReactNode = (
    <NewTransactionButton>Nova Transação</NewTransactionButton>
  );

  const userAvatar: ReactNode = (
    <UserAvatar
      src="https://github.com/heitorgandolfi.png"
      alt="Foto Usuário"
    />
  );

  function handleSignOut() {
    window.localStorage.removeItem("user");
    router.navigate("/login");
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva coins logo" />

        <InteractWrapper>
          <div>
            <Modal title="Nova Categoria" trigger={newCategoryButton}>
              <AuthForm>
                <p>Cadastre uma categoria antes de criar uma transação.</p>
                <AuthInput placeholder="Descrição" />
                <AuthButton type="submit">Cadastrar</AuthButton>
              </AuthForm>
            </Modal>

            <Modal title="Nova Transação" trigger={newTransactionButton}>
              <AuthForm>
                <AuthInput placeholder="Descrição" />
                <AuthInput placeholder="Valor" />
                <AuthInput placeholder="Categoria" />

                <TransactionTypeContainer>
                  <TransactionTypeButton
                    type="button"
                    variant="income"
                    value="income"
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton
                    type="button"
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeContainer>

                <AuthButton>Cadastrar</AuthButton>
              </AuthForm>
            </Modal>
          </div>

          <Modal title="Meu perfil" trigger={userAvatar}>
            <AuthForm>
              <UserAvatar
                src="https://github.com/heitorgandolfi.png"
                alt="Foto Usuário"
                variant="large"
              />
              <AuthInput type="name" placeholder="Heitor Gandolfi" />
              <AuthInput type="email" placeholder="heitor.gandolfi@lolo.com" />
              <AuthButton type="submit">Atualizar</AuthButton>

              <SignOutButton type="button" onClick={handleSignOut}>
                Sair
              </SignOutButton>
            </AuthForm>
          </Modal>
        </InteractWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
