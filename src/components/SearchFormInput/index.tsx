import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import { loadFilteredTransactionDone } from "../../stores/FilteredTransactionStore/FilteredTransactionEvents";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const { register, handleSubmit } = useForm<InputProps>({
    resolver: yupResolver(formSchema),
  });

  // dynamic search by typing
  function handleNewSearch(data: InputProps) {
    const { description } = data;
    const filter = transactions.filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase()) ||
        transaction.category.description
          .toLowerCase()
          .includes(description.toLowerCase()) ||
        transaction.amount.toString().includes(description.toLowerCase())
    );
    loadFilteredTransactionDone(filter);
  }

  return (
    <SearchFormContainer onChange={handleSubmit(handleNewSearch)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("description")}
      />
    </SearchFormContainer>
  );
};
