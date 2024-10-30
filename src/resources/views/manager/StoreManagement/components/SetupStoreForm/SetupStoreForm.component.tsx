import { AccordionSection } from '@/resources/components/global';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Switch,
  Textarea
} from '@/resources/components/ui';

import { ColorPicker } from '../ColorPicker/ColorPicker.component';

import { useSetupForm } from './useSetupForm';

export function SetupStoreForm(): JSX.Element {
  const { methods, handleSubmit, errors, themeType, handleChangeSetTheme } =
    useSetupForm();

  return (
    <AccordionSection title='Customizar minha loja'>
      <p className='font-semibold text-base'>
        Selecione o tema padrão de sua loja:
      </p>
      <ColorPicker
        onChange={(color: string) => handleChangeSetTheme(color)}
        themeType={themeType ? themeType : undefined}
      />

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-3'
      >
        <Form {...methods}>
          <div className='flex gap-5 items-center'>
            <FormField
              control={methods.control}
              name='client.clientLogo'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-base'>
                    Logo do loja (url)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='url'
                      className='h-[50px] rounded'
                      value={field.value || ''}
                      errorMessage={errors.client?.clientLogo?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className='flex items-center'>
            <FormField
              control={methods.control}
              name='client.useBackgroundDefaultPage'
              render={({ field }) => (
                <FormItem className='flex items-center gap-3'>
                  <FormLabel className='text-base'>Logo</FormLabel>
                  <FormControl>
                    <div>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={methods.control}
            name='client.clientDescription'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Descrição do loja</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value || ''}
                    className='h-[70px] rounded'
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name='client.titleHmtl'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Título da Página</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='h-[50px] rounded'
                    value={field.value || ''}
                    errorMessage={errors.client?.titleHmtl?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name='client.clientBackground'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>
                  Imagem de fundo da loja (url)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='url'
                    className='h-[50px] rounded'
                    value={field.value || ''}
                    errorMessage={errors.theme?.header?.titleColor?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className='flex items-center'>
            <FormField
              control={methods.control}
              name='client.useBackgroundDefaultPage'
              render={({ field }) => (
                <FormItem className='flex items-center gap-3'>
                  <FormLabel className='text-base'>
                    Usar fundo em todas as páginas?
                  </FormLabel>
                  <FormControl>
                    <div>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={methods.control}
            name='theme.header.titleColor'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>
                  Cor do título da loja
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='h-[50px] rounded'
                    value={field.value || ''}
                    errorMessage={errors.theme?.header?.titleColor?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name='theme.header.subTitleColor'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>
                  Cor do subtítulo da loja
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ''}
                    className='h-[50px] rounded'
                    errorMessage={errors.theme?.header?.subTitleColor?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className='flex flex-row-reverse mt-12'>
            <Button
              className='hover:scale-105 h-[50px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] transform active:scale-90 hover:opacity-[80%] md:w-[300px] w-full text-white'
              type='submit'
            >
              Salvar
            </Button>
          </div>
        </Form>
      </form>
    </AccordionSection>
  );
}
