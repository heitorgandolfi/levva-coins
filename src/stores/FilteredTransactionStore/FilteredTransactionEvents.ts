import { createEvent } from "effector";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

export const loadFilteredTransaction = createEvent("loadFilteredTransaction");

export const loadFilteredTransactionDone = createEvent<TransactionValues[]>(
  "loadFilteredTransactionDone"
);
export const loadFilteredTransactionFail = createEvent<RequestError>(
  "loadFilteredTransactionFail"
);
