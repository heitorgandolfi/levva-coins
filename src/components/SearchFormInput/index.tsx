import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import FilteredTransactionsUseCase from "../../useCases/FilteredTransactionsUseCase/FilteredTransactionsUseCase";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";
import FilteredTransactionStore from "../../stores/FilteredTransactionStore/FilteredTransactionStore";
import { AnimatedSpinnerGap } from "../../styles/global";

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
  const { isLoading } = useStore(FilteredTransactionStore);

  const { register, handleSubmit, reset, setFocus } = useForm<InputProps>({
    resolver: yupResolver(formSchema),
  });

  // dynamic search by typing
  function handleNewSearch({ description }: InputProps) {
    const filter = transactions.filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase().trim()) ||
        transaction.category.description
          .toLowerCase()
          .includes(description.toLowerCase().trim()) ||
        transaction.amount.toString().includes(description.toLowerCase())
    );
    FilteredTransactionsUseCase.execute(filter);

    filter.length > 0 ? reset() : setFocus("description");
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleNewSearch)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("description")}
      />
      <button type="submit">
        {isLoading ? (
          <AnimatedSpinnerGap size={20} weight="bold" />
        ) : (
          <>
            <MagnifyingGlass size={20} weight="bold" />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  );
};
