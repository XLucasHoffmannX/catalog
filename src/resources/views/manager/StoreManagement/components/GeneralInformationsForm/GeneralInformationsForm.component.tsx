import { useEffect } from 'react';

import { AccordionSection } from '@/resources/components/global';
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

import { useGeneralInformationsForm } from './useGeneralInformationsForm';
export function GeneralInformationsForm(): JSX.Element {
  const {
    methods,
    handleSubmit,
    errors,
    store,
    isAvailableDomain,
    isNameDirty,
    handleSetStatusStore,
    isLoadingButton
  } = useGeneralInformationsForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <AccordionSection title='Informações gerais'>
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
                  <FormLabel className='text-base'>Nome de sua loja</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={cn(
                        'h-[50px] rounded',
                        isAvailableDomain?.available &&
                          methods.watch('name') !== '' &&
                          'border border-green-600 text-green-600',
                        isNameDirty &&
                          !isAvailableDomain?.available &&
                          methods.watch('name') !== '' &&
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
            {methods.watch('name') !== '' && isAvailableDomain?.available && (
              <p className='text-green-600'>Nome disponivel</p>
            )}

            {isNameDirty &&
              !isAvailableDomain?.available &&
              methods.watch('name') !== '' && (
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
        <div className='flex justify-between mt-1'>
          <Button
            variant='outline'
            className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full '
            type='button'
            onClick={() => {
              if (store) {
                handleSetStatusStore(!store?.status);
              }
            }}
            isLoading={isLoadingButton}
          >
            {store?.status ? 'Desativar' : 'Ativar'} loja
          </Button>

          <Button
            className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full text-white'
            type='submit'
            isLoading={isLoadingButton}
          >
            Atualizar
          </Button>
        </div>
      </form>
    </AccordionSection>
  );
}
