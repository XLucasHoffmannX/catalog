import { useCartContext } from '@/app/contexts';
import { Button } from '@/resources/components/ui';

export function DeliveryAndCollection(): JSX.Element {
  const { handleChangeIsOpenDeliveryOptionsModal } = useCartContext();

  return (
    <div className='flex items-center justify-between bg-violet-500 h-full p-3 rounded-2xl shadow-lg shadow-slate-500/50 text-white font-semibold border w-[500px] md:h-14'>
      <div className='flex flex-col'>
        <div className='text-sm font-light truncate md:w-full w-[250px]'>
          Chegara <span className='font-bold'>quinta-feira</span>
          <span> para</span> <span className='font-bold'>Rua Estafanio</span>
        </div>
        <p className='text-sm font-semibold '>R$ 35,00</p>
      </div>

      <div className='flex items-center gap-3 text-neutral-700'>
        <Button
          className='bg-white text-neutral-700'
          onClick={() => handleChangeIsOpenDeliveryOptionsModal(true)}
        >
          Alterar
        </Button>
      </div>
    </div>
  );
}
