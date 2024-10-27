import { domain } from './constants';
import { ClientRouter } from './routes';

export function useGetApp() {
  const subdomain = useGetSubdomain(window.location.hostname);

  const mainDomain = domain.find(app => app.main);

  if (!mainDomain) throw new Error('Must have main router');

  // Verifica se há um subdomínio; se sim, usa ClientRouter
  if (subdomain) return ClientRouter;

  // Caso contrário, usa ManagerRouter
  return mainDomain.app;
}

export function useGetSubdomain(loc: string) {
  const locationParts = loc.split('.');

  const isLocalHost = locationParts.slice(-1)[0] === 'localhost';

  // Extrai o subdomínio para localhost ou um domínio com mais de dois segmentos
  if (isLocalHost && locationParts.length > 1) {
    return locationParts.slice(0, -1).join('');
  }

  if (!isLocalHost && locationParts.length > 2) {
    return locationParts.slice(0, -2).join('.');
  }

  return ''; // Retorna vazio para o domínio principal (sem subdomínio)
}
