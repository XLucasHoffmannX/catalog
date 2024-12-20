import { RiInformationLine } from 'react-icons/ri';

import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { Loader } from '@/resources/components/global';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Separator,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/resources/components/ui';
import { cn } from '@/shared/lib/utils';
import { Mask } from '@/shared/utils/format';

import { useAddStore } from './useAddStore';
export function AddStoreView(): JSX.Element {
  const { methods, errors, handleSubmit, isPendingMutate, isAvailableDomain } =
    useAddStore();

  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Empresa', url: managerRoutes.manage },
        { name: 'Adicionar Loja' }
      ]}
    >
      <Loader isLoading={isPendingMutate} />

      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[800px]'>
          <h1 className='font-bold text-3xl'>Adicionar Loja</h1>

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
                          Titulo de sua loja *
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
                          Nome de sua loja *
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
                      <FormLabel className='text-base'>Descrição *</FormLabel>

                      <FormControl>
                        <Textarea
                          {...field}
                          className='h-[70px] rounded'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {methods.watch('name') && isAvailableDomain?.available && (
                  <div className='flex flex-col justify-center mt-2'>
                    <p>Exemplo do domínio de sua loja:</p>
                    <span className='font-medium text-primary'>{`${methods.watch(
                      'name'
                    )}.${window.location.hostname}${
                      window.location.port ? `:${window.location.port}` : ''
                    }`}</span>
                  </div>
                )}

                {/* Endereço da empresa */}
                <div className='flex items-center mt-4 gap-2'>
                  <h1 className='font-bold text-xl'>Endereço da loja</h1>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiInformationLine />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Este é o endereço de origem para envio dos produtos ou
                          para retirada pelo cliente.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <Separator className='mb-4' />

                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>CEP *</FormLabel>

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
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Rua *</FormLabel>

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
                </div>

                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Número *</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            type='number'
                            errorMessage={errors.title?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Estado *</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            errorMessage={errors.title?.message}
                            maxLength={45}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Bairro *</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            type='number'
                            errorMessage={errors.title?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={methods.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Cidade *</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            value={field.value || ''}
                            errorMessage={errors.title?.message}
                            maxLength={45}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={methods.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel className='text-base'>Complemento</FormLabel>

                      <FormControl>
                        <Input
                          {...field}
                          className='h-[50px] rounded'
                          value={field.value || ''}
                          errorMessage={errors.title?.message}
                          maxLength={45}
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
    </ManageAppLayoutWrapper>
  );
}
