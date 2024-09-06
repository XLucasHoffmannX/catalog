import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Content } from '@/resources/components/global';
import { DefaultPageWrapper } from '@/resources/components/layouts';
import { Button, Separator } from '@/resources/components/ui';

export function PaymentView(): JSX.Element {
  const navigate = useNavigate();

  return (
    <DefaultPageWrapper>
      <div className='w-full flex flex-col items-center'>
        <Content
          title='Finalizar compra'
          isBackTo='/cart'
          className='md:w-[500px]'
        >
          <div className='w-full flex flex-col gap-5 justify-between md:w-[500px] mt-6'>
            <div className='flex items-center border border-neutral-300 bg-secondary rounded-3xl p-3 gap-5 md:w-[500px] w-full'>
              <div className='flex flex-col w-full'>
                <h2 className='font-medium'>Resumo da compra</h2>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-secondary-foreground'>
                    Total: R$ 120,00
                  </span>
                  <span className='font-bold text-primary'>Items: 3</span>
                </div>
              </div>
              <Button className='flex items-center gap-2'>
                <p className='text-sm'>Editar</p>
                <FiEdit className='text-sm' />
              </Button>
              {/* <div className='text-primary flex items-center gap-1 cursor-pointer'></div> */}
            </div>

            <Separator />

            <div className='bg-neutral-100 rounded-sm p-2'>
              <h2 className='font-medium'>Selecionar forma de pagamento</h2>
            </div>

            <Separator />

            <div className='w-full flex flex-col gap-2'>
              <Button className='w-full h-12 bg-primary'>Finalizar</Button>
              <Button
                className='w-full text-red-600 underline'
                variant='link'
                onClick={() => navigate('/cart')}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Content>
      </div>
    </DefaultPageWrapper>
  );
}
