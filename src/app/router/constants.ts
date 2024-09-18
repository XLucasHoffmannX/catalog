import { ClientRouter, ManagementRouter, PublicRouter } from './routes';

export const domain = [
  {
    subdomain: 'admin',
    app: ManagementRouter,
    main: false
  },
  {
    subdomain: 'client',
    app: ClientRouter,
    main: false
  },
  {
    subdomain: '',
    app: PublicRouter,
    main: true
  }
];
