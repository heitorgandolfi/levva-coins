import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { RequestError } from "../../domain/request";
import { ProfileParams } from "../../domain/profile";

const updateUser = async ({ id, name, email, password }: ProfileParams): Promise<void> => {
  return Api.put({
    url: `/user/${id}`,
    body: {
      name,
      email,
      password,
    }
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const ProfileService = {
  updateUser,
};
