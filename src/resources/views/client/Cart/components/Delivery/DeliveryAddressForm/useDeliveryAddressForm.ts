import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useGetViaCepAddressByPostalCode } from '@/app/modules/global';
import { states } from '@/shared/constants';
import { Mask } from '@/shared/utils/format';

import {
  deliveryAddressForm,
  DeliveryAddressFormSchemaType
} from './deliveryAddressForm.schema';

export function useDeliveryAddressForm() {
  const methods = useForm<DeliveryAddressFormSchemaType>({
    resolver: zodResolver(deliveryAddressForm)
  });

  const postalCode = methods.watch('postalCode');

  const isGetViaCepAddressEnabled = postalCode?.length === 9;

  const { isFetchingAddress, address } = useGetViaCepAddressByPostalCode({
    postalCode,
    enabled: isGetViaCepAddressEnabled
  });

  function onSubmit(data: DeliveryAddressFormSchemaType) {
    console.log('foise');
    console.log(data);
  }

  useEffect(() => {
    const foundState = states.find(
      state => address && state.value === address?.state
    );

    if (address === null) {
      toast.error('CEP incorreto!');
      return;
    }

    if (address) {
      methods.setValue('street', Mask.apply('letters', address.street), {
        shouldValidate: true
      });
      methods.setValue(
        'complement',
        Mask.apply('alphanumericWithAccents', address.complement),
        {
          shouldValidate: true
        }
      );
      methods.setValue(
        'neighborhood',
        Mask.apply('letters', address.neighborhood),
        {
          shouldValidate: true
        }
      );
      methods.setValue('city', Mask.apply('letters', address.city), {
        shouldValidate: true
      });
    }

    if (foundState) {
      methods.setValue('state', foundState.value as string);
    }
  }, [address, methods]);

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods
  };
}
