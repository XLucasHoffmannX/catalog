export type CurrencyCodeType = 'pt-BR' | 'en-US' | 'es-ES';

export type CurrencyOptionsType = {
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  currency?: string;
  style?: 'currency' | 'decimal' | 'percent';
} | null;

export type CurrencyType = 'BRL' | 'USD' | 'EUR';

export interface ISelectOption {
  value: string;
  label: string;
}

export type MaskType =
  | 'phone'
  | 'cpf'
  | 'cnpj'
  | 'date'
  | 'currency'
  | 'numeric'
  | 'cep'
  | 'integer'
  | 'letters'
  | 'alphanumeric'
  | 'alphanumericWithAccents'
  | 'negative-currency'
  | 'cnae'
  | 'negative-currency'
  | 'legalNature'
  | 'cpf-cnpj'
  | 'credit-card'
  | 'date-mm/yy';
