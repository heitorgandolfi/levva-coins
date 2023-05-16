import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 1.5rem;
  gap: 1rem;
  margin-top: -4.75rem;
`;

interface SummaryCardProps {
  variant?: "balance";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0px 0px 10px 5px #00000010;

  width: 100%;
  max-width: 20rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 1rem;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  // "&:last-child, nesse caso tb seria uma opção para selecionar o ultimo elemento"
  ${(props) =>
    props.variant === "balance" &&
    css`
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme["black"]},
        ${(props) => props.theme["gray-600"]}
      );
      border-right: 2px solid ${(props) => props.theme["yellow-500"]};
      header {
        color: ${(props) => props.theme["yellow-500"]};
      }
      strong {
        color: ${(props) => props.theme["yellow-500"]};
      }
    `}
`;
