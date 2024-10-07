type OpenModalType = {
  title: string;
  open: boolean;
};

export interface IProductManagerContext {
  isOpenRemoveModal: OpenModalType;
  handleChangeRemoveModal: (value: OpenModalType) => void;
}
