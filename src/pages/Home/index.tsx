import { useEffect } from "react";

import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import GetTransactionsUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  SearchFormInput,
  filteredTransactions,
} from "../../components/SearchFormInput";

import {
  HomeWrapper,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableEmpty,
} from "./styles";

export const Home = () => {
  const { isLoading, transactions } = useStore(TransactionStore);
  const filtered = useStore(filteredTransactions);

  const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    GetTransactionsUseCase.execute();
  }, []);

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
            {filtered.length
              ? filtered.map((Filteredtransaction) => (
                  <tr key={Filteredtransaction.id}>
                    <td width="50%">{Filteredtransaction.description}</td>
                    <td>
                      <PriceHighLight
                        variant={
                          Filteredtransaction.type === 0 ? "income" : "outcome"
                        }
                      >
                        {money.format(Filteredtransaction.amount)}
                      </PriceHighLight>
                    </td>
                    <td>{Filteredtransaction.category.description}</td>
                    <td>{Filteredtransaction.createdAt}</td>
                  </tr>
                ))
              : transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight
                        variant={transaction.type === 0 ? "income" : "outcome"}
                      >
                        {money.format(transaction.amount)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category.description}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                ))}
          </tbody>
        </TransactionsTable>
        {!isLoading && transactions.length === 0 && (
          <TransactionsTableEmpty>
            Adicione uma categoria e a sua primeira transação :)
          </TransactionsTableEmpty>
        )}
      </TransactionsContainer>
    </HomeWrapper>
  );
};
