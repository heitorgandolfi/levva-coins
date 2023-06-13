import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const getFilteredTransactions = async (id: any): Promise<TransactionValues[]> => {
  return Api.get({
    url: `/transaction/${id}`
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
