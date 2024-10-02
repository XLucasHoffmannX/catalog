import { z } from 'zod';

export const loginSchema = z.object({
  login: z.string({ required_error: 'Campo obrigatório' }),
  password: z.string({ required_error: 'Campo obrigatório' })
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
