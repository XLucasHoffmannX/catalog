import { ImageWithLoader } from '@/resources/components/global';
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
  Separator,
  Textarea
} from '@/resources/components/ui';
import { Card, CardContent } from '@/resources/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/resources/components/ui/carousel';
import { Currency } from '@/shared/utils/format';

import { useAddProduct } from './useAddProduct';

export function AddProductView(): JSX.Element {
  const {
    methods,
    errors,
    handleSubmit,
    isPendingMutate,
    handleAddImage,
    handleRemoveImage,
    urlInput,
    onChangeUrlInput,
    images
  } = useAddProduct();

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
                            value={field.value || ''}
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
                            value={Currency.format(
                              'BRL',
                              Number(field.value) || 0,
                              true
                            )}
                            onChange={e =>
                              field.onChange(Currency.unformat(e.target.value))
                            }
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
                          className='h-[50px] rounded'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={methods.control}
                  name='subDescription'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Conteúdo</FormLabel>

                      <FormControl>
                        <Textarea
                          {...field}
                          className='h-[100px] rounded'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className='flex gap-5 items-center'>
                  <FormField
                    control={methods.control}
                    name='discount'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>
                          Desconto (%)
                        </FormLabel>
                        <div className='flex items-center gap-3'>
                          <FormControl>
                            <Input
                              {...field}
                              className='h-[50px] rounded'
                              errorMessage={errors.price?.message}
                              type='number'
                              value={field.value || ''}
                              onChange={e =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={methods.control}
                    name='minQuantity'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>
                          Quantidade mínima
                        </FormLabel>
                        <div className='flex items-center gap-3'>
                          <FormControl>
                            <Input
                              {...field}
                              className='h-[50px] rounded'
                              errorMessage={errors.price?.message}
                              type='number'
                              value={field.value || ''}
                              onChange={e =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>

              <Separator className='my-2' />

              <div className='flex flex-col'>
                <Label className='text-base'>
                  Adicionar imagem (opcional):
                </Label>
                <p className='text-light text-sm mb-3'>
                  Selecione o formato abaixo:
                </p>

                <div className='flex md:flex-nowrap flex-wrap gap-2'>
                  <Input
                    placeholder='Exemplo: https://picsum.photos/200/300'
                    type='url'
                    className='md:w-full'
                    value={urlInput || ''}
                    onChange={e => {
                      onChangeUrlInput(e.target.value);
                    }}
                  />

                  <Button
                    type='button'
                    variant='outline'
                    className='md:w-[150px] w-full'
                    disabled={!urlInput}
                    onClick={() => handleAddImage(urlInput)}
                  >
                    Adicionar
                  </Button>
                </div>

                {images && images?.length > 0 && (
                  <div className='w-full flex items-center justify-center mt-10 animate-up'>
                    <Carousel className='w-full max-w-xs animate-left'>
                      <CarouselContent>
                        {images
                          ?.slice()
                          .reverse()
                          .map((image, index) => (
                            <CarouselItem key={index}>
                              <Card className='flex items-center justify-center animate-right'>
                                <CardContent className='flex items-center justify-center w-full text-secondary p-3 '>
                                  <ImageWithLoader
                                    src={image.url as string}
                                    alt={`${index}-${image.url}`}
                                  />
                                </CardContent>
                              </Card>
                              <div className='mt-2 flex items-center justify-center'>
                                <Button
                                  type='button'
                                  variant='outline'
                                  className='w-full'
                                  onClick={() =>
                                    handleRemoveImage(
                                      image.uuidControl as string
                                    )
                                  }
                                >
                                  Remover imagem
                                </Button>
                              </div>
                            </CarouselItem>
                          ))}
                      </CarouselContent>
                      <CarouselPrevious className='mx-[10px]' />
                      <CarouselNext className='mx-[10px]' />
                    </Carousel>
                  </div>
                )}

                <div className='flex flex-row-reverse mt-12'>
                  <Button
                    className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full text-white'
                    type='submit'
                    isLoading={isPendingMutate}
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
