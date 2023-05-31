import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";

export const Summary = () => {
  const { transactions } = useStore(TransactionStore);

  const formatMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const accountBalance = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 0) {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcomes += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
        </header>

        <strong>{formatMoney.format(accountBalance.incomes)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
        </header>

        <strong>{formatMoney.format(accountBalance.outcomes)}</strong>
      </SummaryCard>

      <SummaryCard variant="balance">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme["yellow-500"]} />
        </header>

        <strong>{formatMoney.format(accountBalance.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
