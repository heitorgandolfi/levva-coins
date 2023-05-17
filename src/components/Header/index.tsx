import { ReactNode } from "react";

import {
  HeaderContainer,
  HeaderContent,
  InteractWrapper,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from "./styles";

import { Modal } from "../Modal";
import {
  AuthForm,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "../../styles/global";

import levvaCoinsLogo from "../../assets/logo.svg";
import { AuthInput } from "../../styles/global";
import { AuthButton } from "../../styles/global";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

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

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva coins logo" />

        <InteractWrapper>
          <div>
            <Modal title="Nova Categoria" trigger={newCategoryButton}>
              <p>Cadastre uma categoria antes de criar uma transação.</p>
              <AuthInput placeholder="Descrição" />
              <AuthButton>Cadastrar</AuthButton>
            </Modal>

            <Modal title="Nova Transação" trigger={newTransactionButton}>
              <AuthForm>
                <AuthInput placeholder="Descrição" />
                <AuthInput placeholder="Valor" />
                <AuthInput placeholder="Categoria" />

                <TransactionTypeContainer>
                  <TransactionTypeButton type="button" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton type="button" variant="outcome">
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
            </AuthForm>
          </Modal>
        </InteractWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
