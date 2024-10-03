import { z } from 'zod';

const requeriredError = 'Campo obrigatório';

const imageSchema = z.object({
  id: z.number(),
  url: z.string(),
  base64: z.string(),
  blob: z.array(z.string())
});

export const addProductSchema = z.object({
  name: z.string({ required_error: requeriredError }),
  description: z.string({ required_error: requeriredError }),
  price: z.number({ required_error: requeriredError }),
  images: z.array(imageSchema).optional()
});

export type AddProductSchemaType = z.infer<typeof addProductSchema>;
