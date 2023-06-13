import { useEffect, useState } from "react";

import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import GetTransactionsUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

import FilteredTransactionStore from "../../stores/FilteredTransactionStore/FilteredTransactionStore";

import DeleteTransactionUseCase from "../../useCases/DeleteTransactionUseCase/DeleteTransactionUseCase";

import { Trash } from "phosphor-react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFormInput } from "../../components/SearchFormInput";

import {
  HomeWrapper,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableEmpty,
  ConfirmDeleteTask,
  CancelDeleteTask,
} from "./styles";

import { AnimatedSpinnerGap } from "../../styles/global";

export const Home = () => {
  const { isLoading, transactions } = useStore(TransactionStore);
  const { transactions: filteredTransactions } = useStore(
    FilteredTransactionStore
  );
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState("");

  const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    GetTransactionsUseCase.execute();
  }, []);

  function handleDeleteTransaction(transactionId: string) {
    setDeleteConfirmation(true);
    setSelectedTransactionId(transactionId);
  }

  function confirmDeleteTransaction(transactionId: string) {
    DeleteTransactionUseCase.execute(transactionId);
    setDeleteConfirmation(false);
  }

  function cancelDeleteTransaction() {
    setDeleteConfirmation(false);
  }
  
  return (
    <HomeWrapper>
      <Header />
      <Summary />

      <SearchFormInput />

      <TransactionsContainer>
        <TransactionsTable>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Valor</td>
              <td>Categoria</td>
              <td>Data</td>
              <td>Ação</td>
            </tr>
          </thead>
          <tbody>
            
            {(filteredTransactions.length
              ? filteredTransactions
              : transactions
            ).map((transaction) => (
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
                <td>
                  {isLoading ? (
                    <AnimatedSpinnerGap size={14} weight="bold" />
                  ) : (
                    <>
                      {deleteConfirmation &&
                      selectedTransactionId === transaction.id ? (
                        <>
                          <ConfirmDeleteTask
                            onClick={() =>
                              confirmDeleteTransaction(transaction.id)
                            }
                          />
                          <CancelDeleteTask onClick={cancelDeleteTransaction} />
                        </>
                      ) : (
                        <Trash
                          size={20}
                          weight="bold"
                          onClick={() =>
                            handleDeleteTransaction(transaction.id)
                          }
                        />
                      )}
                    </>
                  )}
                </td>
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
