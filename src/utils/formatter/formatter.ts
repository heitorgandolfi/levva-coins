import { format, Locale } from "date-fns";
import { enUS, ptBR, es } from "date-fns/locale";

const dateLocales: { [key: string]: Locale } = {
  enUS,
  ptBR,
  esCO: es,
  esDO: es,
  esEC: es,
  esAR: es,
};

const formatStringAutoCapitalize = (text: string): string => {
  // eslint-disable-next-line prefer-regex-literals
  const splitWordsRegex = new RegExp(/([A-Z])/g);

  const result = text.replace(splitWordsRegex, "$1");

  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};

const formatStringTruncate = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};

const formatDate = (
  date: Date | string,
  options: {
    formatStr: string;
    isCapitalizedPtBr?: boolean;
  }
): string => {
  const { formatStr, isCapitalizedPtBr } = options;
  const browserLocale = navigator.language;

  const formattedDate =
    typeof date === "string" ? new Date(date.replace(" ", "T")) : date;

  const locale =
    dateLocales[browserLocale.replace("-", "") as keyof typeof dateLocales];

  return format(formattedDate, formatStr, { locale });
};

const formatNumber = (num: number, opt?: Intl.NumberFormatOptions): string => {
  const browserLocale = navigator.language;
  const language =
    browserLocale === "en-US" || browserLocale === "en-ZA" ? "en" : "pt";

  const currencyCode = language === "en" ? "USD" : "BRL";

  const options: Intl.NumberFormatOptions = {
    ...opt,
    style: "currency",
    currency: currencyCode,
  };

  return new Intl.NumberFormat(language, options).format(num);
};

export const Formatter = {
  number: formatNumber,
  date: formatDate,
  capitalize: formatStringAutoCapitalize,
  truncate: formatStringTruncate,
};
