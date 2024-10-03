import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea
} from '@/resources/components/ui';

import { useAddProduct } from './useAddProduct';

export function AddProductView(): JSX.Element {
  const { methods, errors, handleSubmit } = useAddProduct();

  return (
    <ManagerDefaultLayoutWrapper>
      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[800px]'>
          <h1 className='font-bold text-3xl'>Adicionar Produto</h1>

          <div className='mt-6'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3'
            >
              <Form {...methods}>
                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>
                          Nome do produto
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            errorMessage={errors.name?.message}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={methods.control}
                    name='price'
                    render={({ field }) => (
                      <FormItem className='w-[300px]'>
                        <FormLabel className='text-base'>Preço</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            className='h-[50px] rounded'
                            errorMessage={errors.price?.message}
                            type='number'
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={methods.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Descrição</FormLabel>

                      <FormControl>
                        <Textarea
                          {...field}
                          className='h-[150px] rounded'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Form>
            </form>
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
