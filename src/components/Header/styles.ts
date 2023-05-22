import styled, { css } from "styled-components";

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

  @media only screen and (min-width: 1440px) {
    position: relative;
  }
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

interface UserAvatarProps {
  variant?: "large";
}

export const UserAvatar = styled.img<UserAvatarProps>`
  width: 3.1rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;

  @media only screen and (min-width: 1440px) {
    position: absolute;
    height: auto;
    right: -7rem;
  }

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["yellow-500"]};
    box-shadow: 0px 0px 10px 20px #00000015;
  }

  ${(props) =>
    props.variant === "large" &&
    css`
      width: 8rem;
      height: 8rem;
      margin-bottom: 1rem;
    `}
`;

export const InteractWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;

  img {
    margin-left: 2.5rem;
  }
`;
