import { HeaderContainer, HeaderContent, InteractWrapper } from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";
import { MyProfileModal } from "./MyProfileModal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva coins logo" />

        <InteractWrapper>
          <div>
            <CategoryModal />

            <TransactionModal />
          </div>

          <MyProfileModal />
        </InteractWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
