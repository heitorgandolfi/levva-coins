import { TransactionValues } from "../../domain/transaction";

export interface FilteredTransactionState {
  isLoading: boolean;
  transactions: TransactionValues[];
  hasError: boolean;
  errorMessage: string;
}
