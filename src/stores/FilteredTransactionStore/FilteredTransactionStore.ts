import { createStore } from "effector";

import {
  loadFilteredTransaction,
  loadFilteredTransactionDone,
  loadFilteredTransactionFail,
} from "./FilteredTransactionEvents";
import { FilteredTransactionState } from "./FilteredTransactionState";

const initialState: FilteredTransactionState = {
  isLoading: false,
  transactions: [],
  hasError: false,
  errorMessage: "",
};

const FilteredTransactionStore = createStore<FilteredTransactionState>(
  initialState
)
  .on(loadFilteredTransaction, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadFilteredTransactionDone, (_, data) => ({
    isLoading: false,
    transactions: data,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadFilteredTransactionFail, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: data.hasError,
    errorMessage: data.message,
  }));

export default FilteredTransactionStore;
