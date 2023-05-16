import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

export const SearchFormInput = () => {
  return (
    <SearchFormContainer>
      <input type="text" name="" id="" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
