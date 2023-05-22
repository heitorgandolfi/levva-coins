import {
  HomeWrapper,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFormInput } from "../../components/SearchFormInput";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Summary />

      <SearchFormInput />
      
      <TransactionsContainer>
        <TransactionsTable>
          <thead>
            <td>Descrição</td>
            <td>Valor</td>
            <td>Categoria</td>
            <td>Data</td>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">X-Bacon Egg</td>
              <td>
                <PriceHighLight variant="outcome">R$ 13,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>11/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </HomeWrapper>
  );
};
