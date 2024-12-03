import { z } from 'zod';

const requeriredError = 'Campo obrigatório';

export const addProductSchema = z.object({
  name: z.string({ required_error: requeriredError }),
  description: z.string({ required_error: requeriredError }),
  content: z.string({ required_error: requeriredError }),
  price: z.number({ required_error: requeriredError }),
  available: z
    .number({ required_error: requeriredError })
    .min(1, { message: 'O valor mínimo para Avaliação é 1' })
    .max(5, { message: 'O valor máximo para Avaliação é 5' })
    .optional(),
  discount: z.number({ required_error: requeriredError }).optional(),
  quantity: z.number({ required_error: requeriredError }),
  minQuantity: z.number({ required_error: requeriredError })
});

export type AddProductSchemaType = z.infer<typeof addProductSchema>;
