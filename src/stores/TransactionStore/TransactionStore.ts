import { createStore } from "effector";

import {
  loadTransaction,
  loadCreateTransactionDone,
  loadTransactionDone,
  loadTransactionFail,
  loadDeleteTransactionDone,
} from "./TransactionEvents";
import { TransactionState } from "./TransactionState";

const initialState: TransactionState = {
  isLoading: false,
  transactions: [],
  hasError: false,
  errorMessage: "",
};

const TransactionStore = createStore<TransactionState>(initialState)
  .on(loadTransaction, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadCreateTransactionDone, (state, data) => ({
    ...state,
    isLoading: false,
    transactions: [...data, ...state.transactions],
    hasError: false,
    errorMessage: "",
  }))
  .on(loadTransactionDone, (_, data) => ({
    isLoading: false,
    transactions: data.reverse(),
    hasError: false,
    errorMessage: "",
  }))
  .on(loadTransactionFail, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: data.hasError,
    errorMessage: data.message,
  }))
  .on(loadDeleteTransactionDone, (state, data) => ({
    ...state,
    isLoading: false,
    transactions: [
      ...state.transactions.filter(
        (transaction) => transaction.id !== data
      ),
    ],
    hasError: false,
    errorMessage: "",
  }));

export default TransactionStore;
