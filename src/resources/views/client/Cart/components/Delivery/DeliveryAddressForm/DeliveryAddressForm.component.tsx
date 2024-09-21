import { Controller } from 'react-hook-form';
import { useShallow } from 'zustand/react/shallow';

import { useDeliveryContext } from '@/app/contexts';
import {
  Button,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/resources/components/ui';
import { states } from '@/shared/constants';
import { Mask } from '@/shared/utils/format';

import { useDeliveryAddressForm } from './useDeliveryAddressForm';

export function DeliveryAddressForm(): JSX.Element {
  const [addressForm, handleSetAddressForm] = useDeliveryContext(
    useShallow(state => [state.addressForm, state.handleSetAddressForm])
  );

  const { methods, errors, handleSubmit } = useDeliveryAddressForm();

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {addressForm.type === 'CREATE' ? 'Cadastrar' : 'Editar'} endereço
        </DialogTitle>
      </DialogHeader>
      <div className='flex flex-col items-center gap-3 animate-up'>
        <form
          className='flex flex-col gap-2 w-full'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-2'>
            <Label className='text-base'>CEP:</Label>

            <Controller
              name='postalCode'
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                  placeholder='Exemplo: 00000-000'
                  value={Mask.apply('cep', field.value ?? '')}
                  errorMessage={errors.postalCode?.message}
                  onChange={e =>
                    field.onChange(Mask.apply('cep', e.target.value))
                  }
                />
              )}
            />
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Cidade:</Label>

              <Controller
                name='city'
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    errorMessage={errors.city?.message}
                    className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Complemento:</Label>

              <Controller
                name='complement'
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    maxLength={28}
                    errorMessage={errors.complement?.message}
                    className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Bairro:</Label>

              <Controller
                name='neighborhood'
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    errorMessage={errors.neighborhood?.message}
                    className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Rua:</Label>

              <Controller
                name='street'
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    errorMessage={errors.street?.message}
                    className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Número:</Label>

              <Controller
                name='number'
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    errorMessage={errors.number?.message}
                    className='col-span-3 h-[50px] rounded-xl bg-white text-black'
                    type='number'
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='text-base'>Estado:</Label>

              <Controller
                name='state'
                control={methods.control}
                render={({ field }) => (
                  <Select
                    value={field.value || '0'}
                    onValueChange={field.onChange}
                    defaultValue='0'
                  >
                    <SelectTrigger
                      className={`h-[50px] rounded-xl bg-white text-black w-[193px] ${
                        errors.state?.message &&
                        'border-red-500 focus-visible:ring-0'
                      }`}
                    >
                      <SelectValue placeholder='Estado' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Selecione o estado:</SelectLabel>
                        {states.map((state, key) => (
                          <SelectItem
                            value={state.value}
                            key={key}
                            className='cursor-pointer'
                          >
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                    <span className='text-red-500 text-sm'>
                      {errors.state?.message as string}
                    </span>
                  </Select>
                )}
              />
            </div>
          </div>

          <Button
            variant='outline'
            className='h-[45px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full mt-2'
            onClick={() => {
              handleSetAddressForm({ type: 'CREATE', isOpen: false });
            }}
            type='button'
          >
            Cancelar
          </Button>
          <Button
            className='h-[45px] transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full '
            type='submit'
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </>
  );
}
