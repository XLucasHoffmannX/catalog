import { AiOutlineProduct } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Button } from '@/resources/components/ui';
import BackgroundAuth from '@/shared/assets/images/bg-auth.svg';

import { Login, Register } from './components';

import { IAuthProps } from './Auth.types';

export function AuthView({ context }: IAuthProps): JSX.Element {
  return (
    <div className='flex h-svh flex-col justify-between md:h-screen '>
      <main className='flex flex-1 flex-col'>
        <div className='flex h-screen items-center justify-center bg-G100'>
          <div
            className='md:w-[50%] hidden h-[100%] md:flex items-center justify-center bg-zinc-800'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${BackgroundAuth})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top left'
            }}
          >
            <h2 className='text-neutral-200 font-bold text-6xl'>Brasilify</h2>
            <h2 className='text-neutral-200 font-bold text-2xl mb-9'>®</h2>
          </div>

          <div className='md:w-[50%] w-full flex items-center justify-center h-full bg-zinc-900'>
            <div className='max-w-[480px] px-[20px] flex flex-col justify-center text-white font-semibold gap-3'>
              <AiOutlineProduct className='text-3xl' />
              <h1 className='font-semibold text-[32px] mb-[12px] leading-10'>
                Impulsione suas vendas e transforme o seu negócio
              </h1>
              {context === 'login' && <Login />}

              {context === 'register' && <Register />}

              {!context && (
                <>
                  <p className='text-muted font-medium text-neutral-400 text-lg'>
                    Não perca tempo e dinheiro, entre ou crie sua conta para
                    começar.
                  </p>
                  <div className='flex flex-col gap-5  mt-[34px]'>
                    <Link to='/login'>
                      <Button className='text-white hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full'>
                        Entrar
                      </Button>
                    </Link>
                    <Link to='/register'>
                      <Button className='text-white hover:scale-105 bg-transparent h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] border rounded-full transform active:scale-90 hover:opacity-[80%] w-full'>
                        Cadastre-se
                      </Button>
                    </Link>
                  </div>
                  <p className='text-muted font-medium text-neutral-600 text-lg mt-6'>
                    Criando uma conta, você concorda com todos os nossos {''}
                    <Link
                      to='/terms-of-use'
                      className='underline'
                    >
                      termos e condições.
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
