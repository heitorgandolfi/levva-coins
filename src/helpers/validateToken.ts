import jwt from "jsonwebtoken";
import { LoginValues } from "../domain/login";

export function validateToken() {
  const user = JSON.parse(
    window.localStorage.getItem("user") ?? "{}"
  ) as LoginValues;

  if (!user.token) return false;

  return jwt.verify(
    user.token.split(" ")[0],
    "levva-coins-secret",
    (error) => {
      return error ? false : true;
    }
  );
}
