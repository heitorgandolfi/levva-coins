import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const getFilteredTransactions = async (): Promise<TransactionValues[]> => {
  return Api.get({
    url: "/transaction/all", //fazer receber o id de parametro
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const FilteredTransactionService = {
  getFilteredTransactions,
};
