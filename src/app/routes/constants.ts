import { ClientRouter, LandingRouter, ManagementRouter } from './routes';

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
    app: LandingRouter,
    main: true
  }
];
