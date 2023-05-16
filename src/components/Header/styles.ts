import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme["black"]},
    ${(props) => props.theme["gray-600"]}
  );

  border-bottom: 1px solid ${(props) => props.theme["yellow-500"]}30;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  max-width: 1160px;
  width: 100%;
  padding: 2.5rem 0 7.5rem;
  margin: 0 auto;
`;

export const NewCategoryButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  margin-right: 1rem;

  font-weight: bold;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["white"]};

  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["yellow-500"]};
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }
`;

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 6px;

  font-weight: bold;
  background-color: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["gray-400"]};

  transition: background-color 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const UserAvatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["yellow-500"]};
    box-shadow: 0px 0px 10px 20px #00000015;
  }
`;

export const InteractWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;

  img {
    margin-left: 2.5rem;
  }
`;
