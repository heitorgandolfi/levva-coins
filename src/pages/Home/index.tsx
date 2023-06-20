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
import { Formatter } from "../../utils";

export const Home = () => {
  const { isLoading, transactions } = useStore(TransactionStore);
  const { transactions: filteredTransactions } = useStore(
    FilteredTransactionStore
  );
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState("");

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

  function getRemoveTransactionComponent(transactionId: string) {
    if (isLoading) {
      return <AnimatedSpinnerGap size={14} weight="bold" />;
    }

    if (deleteConfirmation && selectedTransactionId === transactionId) {
      return (
        <>
          <ConfirmDeleteTask
            onClick={() => confirmDeleteTransaction(transactionId)}
          />
          <CancelDeleteTask onClick={cancelDeleteTransaction} />
        </>
      );
    }

    return (
      <Trash
        size={20}
        weight="bold"
        onClick={() => handleDeleteTransaction(transactionId)}
      />
    );
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
                    {Formatter.number(transaction.amount)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category.description}</td>
                <td>
                  {Formatter.date(transaction.createdAt, {
                    formatStr: "dd/MM/yyyy",
                    isCapitalizedPtBr: true,
                  })}
                </td>
                <td>{getRemoveTransactionComponent(transaction.id)}</td>
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
