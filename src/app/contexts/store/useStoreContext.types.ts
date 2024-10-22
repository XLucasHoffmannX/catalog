import { IStore } from '@/shared/types';

export interface IUseStoreContext {
  store: IStore | undefined;
  handleSetStore: (store: IStore) => void;
}
