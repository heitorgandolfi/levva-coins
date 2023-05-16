import { HomeWrapper } from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFormInput } from "../../components/SearchFormInput";


export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Summary />
      <SearchFormInput />
    </HomeWrapper>
  );
};
