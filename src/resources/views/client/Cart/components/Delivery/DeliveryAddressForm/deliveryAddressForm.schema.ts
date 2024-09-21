import { z } from 'zod';

const requiredMessage = 'Este campo é obrigatório';
const minChar = 'Esse campo necessita de pelo menos 1 caractere';

export const deliveryAddressForm = z.object({
  postalCode: z
    .string({ required_error: requiredMessage })
    .min(1)
    .regex(/^[0-9]{5}-[0-9]{3}$/, {
      message: requiredMessage
    }),
  street: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar }),
  number: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar }),
  complement: z
    .string({ required_error: requiredMessage })
    .transform(value => (value.trim().length === 0 ? undefined : value))
    .optional(),
  neighborhood: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar }),
  country: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar }),
  city: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar }),
  state: z
    .string({ required_error: requiredMessage })
    .min(1, { message: minChar })
});

export type DeliveryAddressFormSchemaType = z.infer<typeof deliveryAddressForm>;
