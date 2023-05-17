import * as RadioGroup from "@radix-ui/react-radio-group";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]};
}
  body {
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  input, button{
    border: transparent;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  padding: 1rem 0 0;

  p {
    align-self: flex-start;
    font-size: 0.75rem;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["black"]};
  color: ${(props) => props.theme["white"]};
  /* & + & {
    margin-top: 1rem;
  } */
`;

export const AuthButton = styled.button`
  /* margin-top: 1rem; */
  width: 100%;
  padding: 1rem 0;
  margin-top: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["yellow-300"]};
  font-weight: bold;

  transition: background 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const AuthFormLink = styled.a`
  /* margin-top: 1rem; */
  align-self: flex-start;
  font-size: 1rem;

  text-decoration: none;

  color: ${(props) => props.theme["yellow-500"]};
  transition: 0.4s ease-out;

  &:hover {
    /* color: ${(props) => props.theme["yellow-300"]}; */
    text-decoration: underline;
  }
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  max-width: 212px;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  border: 0;

  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["yellow-500"]
        : props.theme["red-500"]};
  }

  &[data-state='checked']{
    transition: background 0.3s;

    color: ${props => props.theme.white};
    background: ${props => props.variant === "income" ? props.theme["yellow-500"] : props.theme["red-500"]};
    outline: ${props => props.variant === "income" ? props.theme["yellow-500"] : props.theme["red-500"]};;

  svg {
    color: ${props => props.theme.white};
    }
  }
`;
