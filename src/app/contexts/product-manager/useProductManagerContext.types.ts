type OpenModalType = {
  title: string;
  open: boolean;
};

type FilterProductType = {
  page: number;
  limit: number;
  search: string | null;
  storeId: string | null;
};

export interface IProductManagerContext {
  isOpenRemoveModal: OpenModalType;
  filters: FilterProductType;
  handleChangeRemoveModal: (value: OpenModalType) => void;
  handleChangeFilter: (pagination: Partial<FilterProductType>) => void;
}
