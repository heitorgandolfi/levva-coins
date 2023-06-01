import { useStore } from "effector-react";
import { createEvent, createStore } from "effector";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";
import { TransactionState } from "../../stores/TransactionStore/TransactionState";

interface InputProps {
  description: string;
}

const formSchema = yup
  .object({
    // pensei em adicionar required, mas ai nao conseguiria voltar todas as transacoes ao dar enter vazio
    description: yup.string(),
  })
  .required();

// criar uma store/useCase??
// evento para atualizar o estado global com o resultado do filtro
const setSearchResults = createEvent<TransactionState[]>();

// store global iniciada com um array vazio
export const filteredTransactions = createStore<TransactionState[]>([]).on(
  setSearchResults,
  (_, searchResult) => searchResult
);

export const SearchFormInput = () => {
  const { isLoading, transactions, hasError, errorMessage } =
    useStore(TransactionStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    resolver: yupResolver(formSchema),
  });

  // atualizando o estado global com os resultados da busca
  function handleSearchSubmit(data: InputProps) {
    const { description } = data;

    const searchResult = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase() ===
        description.toLowerCase().trim()
    );

    setSearchResults(searchResult);
    console.log(searchResult);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("description")}
      />
      <button type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
