import { useEffect } from 'react';

import { HiMiniChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { Loader } from '@/resources/components/global';
import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea
} from '@/resources/components/ui';

import { useAddStore } from './useAddStore';
export function AddStoreView(): JSX.Element {
  const { methods, errors, handleSubmit, isPendingMutate } = useAddStore();

  useEffect(() => {
    console.log(errors);
  }, []);

  return (
    <ManagerDefaultLayoutWrapper>
      <Loader isLoading={isPendingMutate} />

      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[800px]'>
          <Link to='/manage/store'>
            <Button variant='outline'>
              <HiMiniChevronLeft className='text-lg' />
              <p>Voltar </p>
            </Button>
          </Link>

          <h1 className='font-bold text-3xl mt-4'>Adicionar Loja</h1>

          <div className='mt-6'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3'
            >
              <Form {...methods}>
                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>
                          Titulo de sua loja
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            errorMessage={errors.title?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={methods.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>
                          Nome de sua loja
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            errorMessage={errors.name?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={methods.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Descrição</FormLabel>

                      <FormControl>
                        <Textarea
                          {...field}
                          className='h-[70px] rounded'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Form>
              <div className='flex flex-row-reverse mt-12'>
                <Button
                  className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full text-white'
                  type='submit'
                >
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
