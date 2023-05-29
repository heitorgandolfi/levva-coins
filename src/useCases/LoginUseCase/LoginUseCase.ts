import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LoginService } from "../../services/LoginService/LoginService";
import {
  loadLogin,
  loadLoginDone,
  loadLoginFail,
} from "../../stores/LoginStore/LoginEvents";

const execute = async ({ email, password }: LoginParams): Promise<void> => {
  loadLogin();

  const errorCallback = ({ hasError, message }: RequestError) => {
    loadLoginFail({ hasError, message });
  };

  return LoginService.authenticateUser({ email, password })
    .then((user: LoginValues) => {
      window.localStorage.setItem("user", JSON.stringify(user));

      loadLoginDone();

      // navegar o usuario logado para a home
    })
    .catch(errorCallback);
};

const LoginUseCAse = {
  execute,
};

export default LoginUseCAse;
