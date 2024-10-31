import { z } from 'zod';

const requiredError = 'Campo obrigatório';

const clientSchema = z.object({
  clientName: z.string({ required_error: requiredError }),
  clientLogo: z.string({ required_error: requiredError }),
  clientDescription: z.string({ required_error: requiredError }),
  titleHmtl: z.string({ required_error: requiredError }),
  clientDomain: z.string({ required_error: requiredError }),
  clientBackground: z.string().optional(),
  mediaLinks: z.array(z.string()).optional(),
  useBackgroundDefaultPage: z.boolean().optional()
});

const themeVariablesSchema = z.object({
  header: z
    .object({
      titleColor: z.string({ required_error: requiredError }),
      subTitleColor: z.string({ required_error: requiredError }),
      logoAccept: z.boolean({ required_error: requiredError })
    })
    .optional()
});

export const clientDomainSchema = z.object({
  client: clientSchema,
  theme: themeVariablesSchema
});

export type ClientSchemaType = z.infer<typeof clientDomainSchema>;
