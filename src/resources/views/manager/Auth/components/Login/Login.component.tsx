import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button, Input, Label, PasswordInput } from '@/resources/components/ui';

import { useLogin } from './useLogin';

export function Login(): JSX.Element {
  const { errors, handleSubmit, methods, disabledContinue } = useLogin();

  return (
    <div className='animate-up'>
      <p className='text-muted font-medium text-neutral-400 text-lg mb-6'>
        Insira seus dados abaixo para continuar gerenciando seu negócio.
      </p>

      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-5 p-1'>
          <div className='flex flex-col gap-2'>
            <Label className='text-base'>Email</Label>
            <Controller
              name='email'
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label className='text-base'>Senha</Label>
            <Controller
              name='password'
              control={methods.control}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                  errorMessage={errors.password?.message}
                  iconOn='text-primary'
                  iconOff='text-primary'
                />
              )}
            />
          </div>

          <p className='text-muted font-medium text-neutral-600 text-base text-center'>
            <Link
              to='/register'
              className='underline'
            >
              Esqueceu a senha ?
            </Link>
          </p>
        </div>

        <Button
          className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full'
          type='submit'
          disabled={disabledContinue}
        >
          Entrar
        </Button>
        <p className='text-muted font-medium text-neutral-600 text-base text-center'>
          Não possui uma conta ainda? {''}
          <Link
            to='/register'
            className='underline'
          >
            Cadastre-se aqui.
          </Link>
        </p>
      </form>
    </div>
  );
}
