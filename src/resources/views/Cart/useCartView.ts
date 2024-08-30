import { useMediaQuery } from 'usehooks-ts';

export function useCartView() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return {
    isDesktop
  };
}
