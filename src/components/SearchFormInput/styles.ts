import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  width: 90%;
  max-width: 1212px;
  margin: 0 auto;
  margin-top: 4rem;

  input {
    width: 1020px;
    padding: 1rem;
    border-radius: 6px;
    border: 0;

    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    width: 100%;
    max-width: 160px;
    padding: 1rem;

    border-radius: 6px;
    background: transparent;
    color: ${(props) => props.theme["yellow-300"]};
    border: 1px solid ${(props) => props.theme["yellow-300"]};

    font-weight: bold;

    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme["yellow-500"]};
      border-color: ${(props) => props.theme["yellow-500"]};
      color: ${(props) => props.theme["gray-600"]};
    }
  }
`;
