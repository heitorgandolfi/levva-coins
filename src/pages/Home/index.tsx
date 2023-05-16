import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { HomeWrapper } from "./styles";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Summary />
    </HomeWrapper>
  );
};
