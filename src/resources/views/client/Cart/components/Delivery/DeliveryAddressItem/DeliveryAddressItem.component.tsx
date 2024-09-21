import { IoChevronForward } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { useShallow } from 'zustand/react/shallow';

import { useDeliveryContext } from '@/app/contexts';
import { Button, Separator } from '@/resources/components/ui';

export function DeliveryAddressItem(): JSX.Element {
  const [address, handleSetAddressForm] = useDeliveryContext(
    useShallow(state => [state.address, state.handleSetAddressForm])
  );

  return (
    <>
      {address ? (
        <div className='rounded-3xl bg-neutral-200 p-3 flex items-center justify-between gap-2 cursor-pointer'>
          <MdLocationPin className='text-violet-600 text-lg' />
          <p className='font-medium text-black text-sm w-[250px] truncate text-center'>
            Rua Marquesa de Santos 17 - CEP 83900-000
          </p>
          <IoChevronForward className='text-violet-600 text-lg' />
        </div>
      ) : (
        <div
          className='rounded-3xl bg-neutral-200 p-3 flex items-center justify-between gap-2 cursor-pointer'
          onClick={() => {
            handleSetAddressForm({ type: 'CREATE', isOpen: true });
          }}
        >
          <TbTruckDelivery className='text-violet-600 text-lg' />
          <p className='font-bold text-black text-sm w-[250px] truncate text-center'>
            Adicionar endereço de entrega
          </p>
          <IoChevronForward className='text-violet-600 text-lg' />
        </div>
      )}

      {address && (
        <Button
          variant='ghost'
          className='underline'
        >
          Editar local de entrega
        </Button>
      )}

      <Separator />
    </>
  );
}
