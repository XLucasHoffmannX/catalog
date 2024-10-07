import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';

export function ManagerAreaView(): JSX.Element {
  return (
    <ManagerDefaultLayoutWrapper>
      <section className='w-full flex justify-center p-4 '>
        <div className='w-full max-w-[1280px]'>
          <h1 className='font-bold text-3xl'>Gerenciar empresa</h1>

          <sub className='font-light text-sm'>Área de controle geral</sub>

          <div className='borde border-red-500'></div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
