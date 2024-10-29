import { z } from 'zod';

const requeriredError = 'Campo obrigatório';

export const updateStoreSchema = z.object({
  name: z.string({ required_error: requeriredError }),
  title: z.string({ required_error: requeriredError }),
  description: z.string({ required_error: requeriredError })
});

export type UpdateStoreSchemaType = z.infer<typeof updateStoreSchema>;
