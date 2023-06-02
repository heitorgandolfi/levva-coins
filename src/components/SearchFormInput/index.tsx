import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import { loadFilteredTransactionDone } from "../../stores/FilteredTransactionStore/FilteredTransactionEvents";

// import FilteredTransactionStore from "../../stores/FilteredTransactionStore/FilteredTransactionStore";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

interface InputProps {
  description: string;
}

const formSchema = yup
  .object({
    // pensei em adicionar required, mas ai nao conseguiria voltar todas as transacoes ao dar enter vazio
    description: yup.string(),
  })
  .required();

export const SearchFormInput = () => {
  const { transactions } = useStore(TransactionStore);
  // const { hasError, errorMessage } = useStore(FilteredTransactionStore); // import tb está comentado

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    /*formState: { erros },*/
  } = useForm<InputProps>({
    resolver: yupResolver(formSchema),
  });

  function handleSearchSubmit(data: InputProps) {
    const { description } = data;

    const searchResult = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase() ===
        description.toLowerCase().trim()
    );

    loadFilteredTransactionDone(searchResult);
    searchResult.length > 0 ? reset() : setFocus("description");
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
