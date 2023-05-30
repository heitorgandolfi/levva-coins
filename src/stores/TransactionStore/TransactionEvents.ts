import { createEvent } from "effector";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

export const loadTransaction = createEvent("loadTransaction");
export const loadCreateTransactionDone = createEvent(
  "loadCreateTransactionDone"
);
export const loadTransactionDone = createEvent<TransactionValues[]>(
  "loadTransactionDone"
);
export const loadTransactionFail = createEvent<RequestError>(
  "loadTransactionFail"
);
