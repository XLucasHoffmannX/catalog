export type CurrencyCodeType = 'pt-BR' | 'en-US' | 'es-ES';

export type CurrencyOptionsType = {
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  currency?: string;
  style?: 'currency' | 'decimal' | 'percent';
} | null;

export type CurrencyType = 'BRL' | 'USD' | 'EUR';
