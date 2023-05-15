import "styled-components";
import { DefaultTheme } from "styled-components";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}
