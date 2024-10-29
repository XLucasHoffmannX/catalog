import { IStore } from '@/shared/types';

export interface IFinishStoreModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  store?: IStore;
}
