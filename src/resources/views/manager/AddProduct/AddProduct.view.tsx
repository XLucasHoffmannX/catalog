import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { ImageWithLoader, Loader } from '@/resources/components/global';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import { AccountSwitcher } from '@/resources/components/layouts/manager/ManagerDefaultLayout/components/AccountSwitcher/AccountSwitch.component';
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
    handleFileChange,
    onChangePreviewImages,
    previewImages,
    creatingProduct
  } = useAddProduct();

  const { store } = useManagementSession();

  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Produtos', url: managerRoutes.products },
        { name: 'Adicionar novo produto' }
      ]}
    >
      <Loader
        isLoading={creatingProduct.isLoading}
        message={creatingProduct.message}
      />

      <section className='w-full flex justify-center'>
        <div className='w-full max-w-[800px]'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl'>Adicionar Produto</h1>
            <span className='font-light mb-4'>
              Adicionando para : <b className='font-medium  '>{store?.name}</b>
            </span>

            <AccountSwitcher />
          </div>

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
                  name='content'
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
                    name='quantity'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Quantidade</FormLabel>
                        <div className='flex items-center gap-3'>
                          <FormControl>
                            <Input
                              {...field}
                              className='h-[50px] rounded'
                              errorMessage={errors.quantity?.message}
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
                              errorMessage={errors.minQuantity?.message}
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
                              errorMessage={errors.discount?.message}
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
                    name='available'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-base'>Avaliação</FormLabel>
                        <div className='flex items-center gap-3'>
                          <FormControl>
                            <Input
                              {...field}
                              className='h-[50px] rounded'
                              errorMessage={errors.available?.message}
                              type='number'
                              value={field.value || ''}
                              onChange={e =>
                                field.onChange(Number(e.target.value))
                              }
                              maxLength={1}
                              min={1}
                              max={5}
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
                  Adicionar imagens (opcional):
                </Label>
                <p className='text-light text-sm mb-3'>
                  Selecione os arquivos de imagem abaixo:
                </p>

                <div className='flex md:flex-nowrap flex-wrap gap-2'>
                  <Input
                    type='file'
                    accept='image/png, image/jpeg'
                    className='md:w-full'
                    multiple
                    onChange={handleFileChange}
                  />
                </div>

                {/* Pré-visualização das imagens */}
                {previewImages.length > 0 && (
                  <div className='w-full flex items-center justify-center mt-10 animate-up'>
                    <Carousel className='w-full max-w-xs animate-left'>
                      <CarouselContent>
                        {previewImages
                          .slice()
                          .reverse()
                          .map((image: string, reversedIndex: number) => (
                            <CarouselItem
                              key={reversedIndex}
                              className='flex flex-col justify-between'
                            >
                              <p className='w-full text-center mb-2 font-medium text-sm'>
                                Imagem {reversedIndex + 1}/
                                {previewImages.length}
                              </p>
                              <Card className='flex items-center justify-center animate-right h-full'>
                                <CardContent className='flex items-center justify-center w-full text-secondary p-3 '>
                                  <ImageWithLoader
                                    src={image}
                                    alt={`preview-${reversedIndex}`}
                                  />
                                </CardContent>
                              </Card>

                              <div className='mt-2 flex items-center justify-center'>
                                <Button
                                  type='button'
                                  variant='outline'
                                  className='w-full'
                                  onClick={() =>
                                    onChangePreviewImages((prev: string[]) =>
                                      prev
                                        .slice()
                                        .reverse()
                                        .filter(
                                          (item, i) => i !== reversedIndex
                                        )
                                        .reverse()
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
    </ManageAppLayoutWrapper>
  );
}
