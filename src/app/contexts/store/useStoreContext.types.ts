import { IStore } from '@/shared/types';

export type VisibleFinishModalType = {
  isVisible: boolean;
  storeId: string | undefined;
};

export interface IUseStoreContext {
  store: IStore | undefined;
  visibleFinishModal: VisibleFinishModalType;
  handleVisibleFinishModal: (value: VisibleFinishModalType) => void;
  handleSetStore: (store: IStore) => void;
}
