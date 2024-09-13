import { domain } from './constants';

export function useGetApp() {
  console.log(window.location.hostname);
  const subdomain = useGetSubdomain(window.location.hostname);

  const main = domain.find(app => app.main);

  if (!main) throw new Error('Must have main router');

  if (subdomain === '') return main.app;

  const app = domain.find(app => subdomain === app.subdomain);

  if (!app) return main.app;

  return app.app;
}

export function useGetSubdomain(loc: string) {
  const locationParts = loc.split('.');

  const isLocalHost = locationParts.slice(-1)[0] === 'localhost';

  if (isLocalHost && locationParts.length > 1) {
    return locationParts.slice(0, -1).join('');
  }

  if (!isLocalHost && locationParts.length > 2) {
    return locationParts.slice(0, -2).join('.');
  }

  return '';
}
