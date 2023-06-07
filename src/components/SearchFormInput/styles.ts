import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  width: 90%;
  max-width: 1212px;
  margin: 0 auto;
  margin-top: 4rem;

  @media only screen and (max-width: 1328px) {
    justify-content: center;
  }

  input {
    width: 1020px;
    padding: 1rem;
    border-radius: 6px;
    border: 0;

    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-400"]};
  }
`;
