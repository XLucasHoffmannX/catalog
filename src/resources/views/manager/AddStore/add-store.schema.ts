import { z } from 'zod';

const requeriredError = 'Campo obrigatório';

export const addStoreSchema = z.object({
  name: z.string({ required_error: requeriredError }),
  title: z.string({ required_error: requeriredError }),
  description: z.string({ required_error: requeriredError })
});

export type AddStoreSchemaType = z.infer<typeof addStoreSchema>;
