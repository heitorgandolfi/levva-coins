import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
        </header>

        <strong>R$ 17.500,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
        </header>

        <strong>R$ 500,00</strong>
      </SummaryCard>

      <SummaryCard variant="balance">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme["yellow-500"]} />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
