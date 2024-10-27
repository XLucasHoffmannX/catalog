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
import { cn } from '@/shared/lib/utils';
import { Mask } from '@/shared/utils/format';

import { useAddStore } from './useAddStore';
export function AddStoreView(): JSX.Element {
  const { methods, errors, handleSubmit, isPendingMutate, isAvailableDomain } =
    useAddStore();

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
                            className={cn(
                              'h-[50px] rounded',
                              isAvailableDomain?.available &&
                                'border border-green-600 text-green-600',
                              !!methods.watch('name') &&
                                !isAvailableDomain?.available &&
                                'border border-red-600 text-red-600'
                            )}
                            value={field.value || ''}
                            maxLength={20}
                            onChange={e => {
                              const maskedValue = Mask.apply(
                                'letters',
                                e.target.value
                              )
                                .replace(/\s+/g, '')
                                .toLowerCase();
                              field.onChange(maskedValue);
                            }}
                            errorMessage={errors.name?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex justify-end'>
                  {isAvailableDomain?.available && (
                    <p className='text-green-600'>Nome disponivel</p>
                  )}

                  {!!methods.watch('name') && !isAvailableDomain?.available && (
                    <p className='text-red-600'>Nome insdiponivel</p>
                  )}
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
