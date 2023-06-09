import { Check, X } from "phosphor-react";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionsContainer = styled.main`
  max-width: 1210px;
  width: 95%;
  margin: 1rem auto 0;

  overflow-x: auto;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  thead {
    td {
      padding: 1rem 2rem;
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  tbody {
    td {
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme["gray-500"]};

      svg:only-child:hover {
        cursor: pointer;
        color: ${(props) => props.theme["red-300"]};

        transition: all 0.3s ease-in-out;
      }
    }
  }

  td {
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighLightProps {
  variant?: "income" | "outcome";
}

export const TransactionsTableEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;

  font-size: 2rem;
`;

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["yellow-500"]
      : props.theme["red-300"]};
`;

export const ConfirmDeleteTask = styled(Check)`
  margin-right: 0.5rem;
  color: ${(props) => props.theme["yellow-300"]};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const CancelDeleteTask = styled(X)`
  color: ${(props) => props.theme["red-300"]};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
