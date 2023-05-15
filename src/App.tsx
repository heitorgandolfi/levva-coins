import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h2>oi oi kuduro</h2>
    </ThemeProvider>
  );
}
