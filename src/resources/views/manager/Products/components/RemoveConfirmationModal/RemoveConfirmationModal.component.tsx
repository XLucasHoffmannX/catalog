import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button
} from '@/resources/components/ui';

import { IRemoveConfirmationModalProps } from './RemoveConfirmationModal.types';

export function RemoveConfirmationModal({
  isOpen,
  onCancel,
  onConfirm,
  isLoading,
  productTitle
}: IRemoveConfirmationModalProps): JSX.Element {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className='sm:max-w-md  w-[95%] rounded-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja remover {productTitle}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Após confirmar {productTitle} será removido
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onCancel()}>
            Cancelar
          </AlertDialogCancel>
          <Button
            variant='destructive'
            onClick={() => {
              onConfirm();
            }}
            isLoading={isLoading}
          >
            Remover
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
