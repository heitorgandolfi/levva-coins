import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import {
  NewTransactionParams,
  TransactionValues,
} from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const createTransaction = async ({
  description,
  amount,
  type,
  categoryId,
}: NewTransactionParams): Promise<void> => {
  return Api.post({
    url: "/transaction",
    body: {
      description,
      amount,
      type,
      categoryId,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
  return Api.get({
    url: "/transaction",
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const deleteTransaction = async (id: any): Promise<TransactionValues[]> => {
  return Api.delete({
    url: `/transaction/${id}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const TransactionService = {
  createTransaction,
  getTransactions,
  deleteTransaction,
};
