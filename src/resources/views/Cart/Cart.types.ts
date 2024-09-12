export interface ICartPaginationParams {
  currentPage: number;
  pageSize: 10;
  searchInput: string;
}

export type HandleChangeSearchParamType = <
  T extends keyof ICartPaginationParams
>(
  type: T,
  value: ICartPaginationParams[T]
) => void;
