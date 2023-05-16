import { ReactNode } from "react";

import {
  HeaderContainer,
  HeaderContent,
  InteractWrapper,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg";
import { Modal } from "../Modal";

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
              <p>teste</p>
            </Modal>

            <Modal title="Nova Transação" trigger={newTransactionButton}>
              <p>teste</p>
            </Modal>

          </div>

          <Modal title="Meu perfil" trigger={userAvatar}>
            <p>teste</p>
          </Modal>  
        </InteractWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
