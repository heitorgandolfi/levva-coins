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
  justify-content: flex-start;

  /* gap: 1rem; */
  padding: 1rem 0 0;
`;

export const AuthInput = styled.input`
  background-color: ${(props) => props.theme["black"]};
  color: ${(props) => props.theme["white"]};

  padding: 1rem;
  border-radius: 6px;

  & + & {
    margin-top: 1rem;
  }
`;

export const AuthButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 0;
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
  margin-top: 1rem;
  font-size: 1rem;
  
  text-decoration: none;

  color: ${(props) => props.theme["yellow-500"]};
  transition: 0.4s ease-out;

  &:hover {
    /* color: ${(props) => props.theme["yellow-300"]}; */
    text-decoration: underline;
  }
`;
