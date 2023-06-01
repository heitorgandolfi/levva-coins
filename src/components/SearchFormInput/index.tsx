import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useStore } from "effector-react";
import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import { createEvent, createStore } from "effector";

interface InputProps {
  description: string;
}

const formSchema = yup
  .object({
    description: yup.string(),
  })
  .required();

// evento para atualizar o estado global
const setSearchResults = createEvent<any>();

// store global com o Effector
export const filteredTransactions = createStore<any>([]).on(
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
    // console.log(searchResult);
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
