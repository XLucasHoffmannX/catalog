import { IoChevronForward } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { useShallow } from 'zustand/react/shallow';

import { useCartContext } from '@/app/contexts';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Separator
} from '@/resources/components/ui';

export function DeliveryOptionsModal(): JSX.Element {
  const [isOpenDeliveryOptionsModal, handleChangeIsOpenDeliveryOptionsModal] =
    useCartContext(
      useShallow(state => [
        state.isOpenDeliveryOptionsModal,
        state.handleChangeIsOpenDeliveryOptionsModal
      ])
    );

  return (
    <Dialog
      open={isOpenDeliveryOptionsModal}
      onOpenChange={() => handleChangeIsOpenDeliveryOptionsModal(false)}
    >
      <DialogContent className='sm:max-w-md  w-[98%] rounded-lg'>
        <DialogHeader>
          <DialogTitle>Opções de frete</DialogTitle>
          <DialogDescription>
            Calculamos os custos e prazos para este endereço:
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center space-x-2 gap-3'>
          <div className='rounded-3xl bg-neutral-200 p-3 flex items-center justify-between gap-2 cursor-pointer'>
            <MdLocationPin className='text-violet-600 text-lg' />
            <p className='font-medium text-black text-sm w-[250px] truncate'>
              Rua Marquesa de Santos 17 - CEP 83900-000
            </p>
            <IoChevronForward className='text-violet-600 text-lg' />
          </div>

          <Button
            variant='link'
            className=''
          >
            Editar local de entrega
          </Button>

          <Separator className='' />
          <h1>Receber por:</h1>

          {/* opçoes de entrega */}
          <div className='rounded-lg border p-3 w-full flex items-center justify-between cursor-pointer'>
            <div className='flex flex-col leading-3'>
              <h2 className='font-medium'>Rede Sul</h2>
              <span className='text-sm text-gray-500'>
                Chegará entre 12/06 e 17/06
              </span>
            </div>
            <div>
              <span className='font-medium text-green-600'>R$ 12,00</span>
            </div>
          </div>

          <div className='rounded-lg border p-3 w-full flex items-center justify-between cursor-pointer'>
            <div className='flex flex-col leading-3'>
              <h2 className='font-medium'>JadLog</h2>
              <span className='text-sm text-gray-500'>
                Chegará entre 15/06 e 17/06
              </span>
            </div>
            <div>
              <span className='font-medium text-green-600'>R$ 18,00</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
