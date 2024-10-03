import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import NotFound from '@/shared/assets/animations/animation-404.json';
import { useAnimationLottie } from '@/shared/hooks/useAnimationLottie';

import { Button } from '../../ui';

export function FallbackError(): JSX.Element {
  const defaultOptions = useAnimationLottie(NotFound, false);

  const { authenticated } = useManagementSession();

  return (
    <main className='flex h-svh flex-col justify-between md:h-screen bg-zinc-800 text-secondary'>
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='w-[300px]  h-[300px] mb-4'>
          <Lottie options={defaultOptions} />
        </div>
        <h1 className='font-bold text-4xl text-white'>Falta alguma coisa...</h1>
        <span className='mt-6 text-lg max-w-[500px] text-center text-neutral-400'>
          Desculpe, não conseguimos encontrar essa página. Você encontrará muito
          para explorar na tela inicial.
        </span>
        <Link to={authenticated ? '/home' : '/'}>
          <Button className='h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:scale-105 hover:opacity-[80%] w-full max-w-[400px] mt-10 bg-transparent border text-white border-white'>
            Voltar ao inicio
          </Button>
        </Link>
      </div>
    </main>
  );
}
