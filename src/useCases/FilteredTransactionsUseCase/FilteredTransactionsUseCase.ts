import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

import { FilteredTransactionService } from "../../services/FilteredTransactionService/FilteredTransactionService";
import {
  loadTransaction,
  loadTransactionDone,
  loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";

const execute = async (): Promise<void> => {
  loadTransaction();

  return FilteredTransactionService.getFilteredTransactions()
    .then((transactions: TransactionValues[]) => {
      loadTransactionDone(transactions);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadTransactionFail({ hasError, message });
    });
};

const FilteredTransactionsUseCase = {
  execute,
};

export default FilteredTransactionsUseCase;
