import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

import { FilteredTransactionService } from "../../services/FilteredTransactionService/FilteredTransactionService";
import {
  loadFilteredTransaction,
  loadFilteredTransactionDone,
  loadFilteredTransactionFail,
} from "../../stores/FilteredTransactionStore/FilteredTransactionEvents";

const execute = async (taskId: string): Promise<void> => {
  loadFilteredTransaction();

  return FilteredTransactionService.getFilteredTransactions(taskId)
    .then((transactions: TransactionValues[]) => {
    loadFilteredTransactionDone([transactions]);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadFilteredTransactionFail({ hasError, message });
    });
};

const FilteredTransactionsUseCase = {
  execute,
};

export default FilteredTransactionsUseCase;
