type FilterCatalogType = {
  page: number;
  limit: number;
  search: string | null;
};

export interface IUseClientContext {
  filters: FilterCatalogType;
  handleChangeFilter: (pagination: Partial<FilterCatalogType>) => void;
}
