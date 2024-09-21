import { useShallow } from 'zustand/react/shallow';

import { useCartContext, useDeliveryContext } from '@/app/contexts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/resources/components/ui';

import { DeliveryAddressForm } from '../DeliveryAddressForm/DeliveryAddressForm.component';
import { DeliveryAddressItem } from '../DeliveryAddressItem/DeliveryAddressItem.component';

export function DeliveryOptionsModal(): JSX.Element {
  const [isOpenDeliveryOptionsModal, handleChangeIsOpenDeliveryOptionsModal] =
    useCartContext(
      useShallow(state => [
        state.isOpenDeliveryOptionsModal,
        state.handleChangeIsOpenDeliveryOptionsModal
      ])
    );

  const [addressForm, handleSetAddressForm] = useDeliveryContext(
    useShallow(state => [state.addressForm, state.handleSetAddressForm])
  );

  return (
    <Dialog
      open={isOpenDeliveryOptionsModal}
      onOpenChange={() => {
        handleChangeIsOpenDeliveryOptionsModal(false);
        handleSetAddressForm({ isOpen: false, type: 'CREATE' });
      }}
    >
      <DialogContent className='sm:max-w-md  w-[98%] rounded-lg'>
        {!addressForm.isOpen ? (
          <>
            <DialogHeader>
              <DialogTitle>Opções de entrega</DialogTitle>
              <DialogDescription>
                Calculamos os custos e prazos para este endereço:
              </DialogDescription>
            </DialogHeader>
            <div className='flex flex-col items-center space-x-2 gap-3'>
              <DeliveryAddressItem />

              <h1>Retirar em:</h1>
              <div className='rounded-lg border p-3 w-full flex items-center justify-between cursor-pointer'>
                <div className='flex flex-col leading-5'>
                  <h2 className='font-medium'>Shopping Centro norte</h2>
                  <span className='text-sm text-gray-500'>
                    Entre 12/06 e 17/06
                  </span>
                </div>
              </div>
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
          </>
        ) : (
          <DeliveryAddressForm />
        )}
      </DialogContent>
    </Dialog>
  );
}
