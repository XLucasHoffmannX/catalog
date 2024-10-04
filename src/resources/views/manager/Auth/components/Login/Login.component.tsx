import { Link } from 'react-router-dom';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  PasswordInput
} from '@/resources/components/ui';

import { useLogin } from './useLogin';

export function Login(): JSX.Element {
  const {
    errors,
    handleSubmit,
    methods,
    disabledContinue,
    isPendingMutateAuth
  } = useLogin();

  return (
    <div className='animate-up'>
      <p className='text-muted font-medium text-neutral-400 text-lg mb-6'>
        Insira seus dados abaixo para continuar gerenciando seu negócio.
      </p>

      <Form {...methods}>
        <form
          className='flex flex-col gap-6'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-5 p-1'>
            <FormField
              control={methods.control}
              name='login'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Usuário ou email</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                      placeholder='Insira seu email'
                      errorMessage={errors.login?.message}
                      value={field.value || ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Senha</FormLabel>

                  <FormControl>
                    <PasswordInput
                      {...field}
                      className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                      errorMessage={errors.password?.message}
                      iconOn='text-primary'
                      iconOff='text-primary'
                      placeholder='Sua senha'
                      value={field.value || ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <p className='text-muted font-medium text-neutral-400 text-base text-center'>
              <Link
                to='/register'
                className='underline'
              >
                Esqueceu a senha ?
              </Link>
            </p>
          </div>

          <Button
            className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full text-white'
            type='submit'
            disabled={disabledContinue}
            isLoading={isPendingMutateAuth}
          >
            Entrar
          </Button>
          <p className='text-muted font-medium text-neutral-400 text-base text-center'>
            Não possui uma conta ainda? {''}
            <Link
              to='/register'
              className='underline'
            >
              Cadastre-se aqui.
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
