import Lottie from 'react-lottie';

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
import CustomizeStore from '@/shared/assets/animations/customize.json';
import { useAnimationLottie } from '@/shared/hooks/useAnimationLottie';

import { IFinishStoreModalProps } from './FinishStoreModal.types';

export function FinishStoreModal({
  isOpen,
  onCancel,
  onConfirm,
  store
}: IFinishStoreModalProps): JSX.Element {
  const defaultOptions = useAnimationLottie(CustomizeStore);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className='sm:max-w-md  w-[95%] rounded-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Sua loja {store?.title} foi criada!
          </AlertDialogTitle>
          <AlertDialogDescription>
            Parabéns sua loja foi criada, agora termine de configurar ela,
            defina suas cores, sua logo e tudo do jeito!
            <div className='flex flex-col items-center justify-center p-6'>
              <div className='w-[200px]  h-[200px] mt-4 pointer-events-none'>
                <Lottie options={defaultOptions} />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <p className='text-center font-light text-sm'>
          Qualquer dúvida estamos a diposição! Lembrando que qualquer alteração
          é de forma instânea
        </p>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onCancel()}>
            Cancelar
          </AlertDialogCancel>
          <Button
            onClick={() => {
              onConfirm();
            }}
          >
            Customizar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
