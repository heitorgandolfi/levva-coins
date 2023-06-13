import { TransactionService } from "../../services/TransactionService/TransactionService";

import {
  loadDeleteTransactionDone,
  loadTransaction,
  loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";

import { RequestError } from "../../domain/request";

const execute = async (id: string): Promise<void> => {
  loadTransaction();

  return TransactionService.deleteTransaction(id)
    .then(() => {
      loadDeleteTransactionDone(id);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadTransactionFail({ hasError, message });
    });
};

const DeleteTransactionUseCase = {
  execute,
};

export default DeleteTransactionUseCase;
