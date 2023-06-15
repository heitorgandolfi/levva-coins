import { router } from "../../Router";

import { LoginValues } from "../../domain/login";
import { ProfileParams } from "../../domain/profile";
import { RequestError } from "../../domain/request";

import { ProfileService } from "../../services/ProfileService/ProfileService";

import {
  loadProfile,
  loadProfileDone,
  loadProfileFail,
} from "../../stores/ProfileStore/ProfileEvents";

const execute = async ({ id, name, email, password }: ProfileParams): Promise<void> => {
  loadProfile();

  return ProfileService.updateUser({ id, name, email, password })
    .then(() => {
      const user = JSON.parse(
        window.localStorage.getItem("user") ?? "{}"
      ) as LoginValues;

      user.name = name;

      window.localStorage.setItem("user", JSON.stringify(user));

      loadProfileDone();
    })
    .catch(({ hasError, message }: RequestError) => {
      loadProfileFail({ hasError, message });
    });
};

const UpdateProfileUseCase = {
  execute,
};

export default UpdateProfileUseCase;
