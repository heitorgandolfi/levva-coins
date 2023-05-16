import {
  HeaderContainer,
  HeaderContent,
  InteractWrapper,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva coins logo" />
        <InteractWrapper>
          <div>
            <NewCategoryButton>Nova Categoria</NewCategoryButton>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </div>
          <UserAvatar
            src="https://github.com/heitorgandolfi.png"
            alt="Foto Usuário"
          />
        </InteractWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
