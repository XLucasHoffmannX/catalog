import { useShallow } from 'zustand/react/shallow';

import { useCartContext } from '@/app/contexts';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/resources/components/ui';

import { IRemovalConfirmationModalProps } from './RemovalConfirmationModal.types';

export function RemovalConfirmationModal({
  isOpenRemovalConfirmationModal,
  onChangeIsOpenRemovalConfirmationModal
}: IRemovalConfirmationModalProps): JSX.Element {
  const [itemToBeRemoved, handleItemToBeRemoved, handleRemoveCartItem] =
    useCartContext(
      useShallow(state => [
        state.itemToBeRemoved,
        state.handleItemToBeRemoved,
        state.handleRemoveCartItem
      ])
    );

  return (
    <AlertDialog open={isOpenRemovalConfirmationModal}>
      <AlertDialogContent className='sm:max-w-md  w-[95%] rounded-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja remover {itemToBeRemoved?.title}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Após confirmar {itemToBeRemoved?.title} será removido
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              onChangeIsOpenRemovalConfirmationModal(false);
              handleItemToBeRemoved(null);
            }}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className='bg-red-600'
            onClick={() => {
              handleRemoveCartItem(itemToBeRemoved?.uuidControl as string);
              handleItemToBeRemoved(null);
              onChangeIsOpenRemovalConfirmationModal(false);
            }}
          >
            Remover
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
