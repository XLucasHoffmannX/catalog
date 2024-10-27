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
  | 'date-mm/yy'
  | 'domain';

interface IPaginatedSort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

interface IPaginatedPageable {
  pageNumber: number;
  pageSize: number;
  sort: IPaginatedSort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface IPaginatedResponse<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T;
  number: number;
  sort: IPaginatedPageable;
  numberOfElements: number;
  pageable: IPaginatedSort;
  first: boolean;
  last: boolean;
  empty: boolean;
}
