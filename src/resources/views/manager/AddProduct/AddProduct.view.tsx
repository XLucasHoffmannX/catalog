import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
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

              <Separator className='my-2' />

              <div className='flex flex-col'>
                <Label className='text-base'>Adicionar imagem:</Label>
                <p className='text-light text-sm mb-2'>
                  Selecione o formato abaixo:
                </p>
                <div className='flex md:flex-nowrap flex-wrap gap-2'>
                  <Select defaultValue='url'>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Selecione o formato' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Formato:</SelectLabel>
                        <SelectItem
                          value='url'
                          defaultChecked
                        >
                          URL
                        </SelectItem>
                        <SelectItem value='archive'>Arquivo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder='Exemplo: https://picsum.photos/200/300'
                    type='url'
                    className='md:w-full '
                  />

                  <Button
                    type='button'
                    variant='outline'
                    className='md:w-[150px] w-full'
                  >
                    Adicionar
                  </Button>
                </div>

                <div className='flex flex-row-reverse mt-12'>
                  <Button
                    className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full text-white'
                    type='submit'
                  >
                    Salvar produto
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
