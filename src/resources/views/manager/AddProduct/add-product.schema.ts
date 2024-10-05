import { z } from 'zod';

const requeriredError = 'Campo obrigatório';

export const addProductSchema = z.object({
  name: z.string({ required_error: requeriredError }),
  description: z.string({ required_error: requeriredError }),
  subDescription: z.string({ required_error: requeriredError }),
  price: z.number({ required_error: requeriredError }),
  discount: z.number({ required_error: requeriredError }),
  minQuantity: z.number({ required_error: requeriredError })
});

export type AddProductSchemaType = z.infer<typeof addProductSchema>;
