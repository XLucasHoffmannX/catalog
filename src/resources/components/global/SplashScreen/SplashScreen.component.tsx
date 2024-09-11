import { VscLoading } from 'react-icons/vsc';

import { ISplashScreen } from './SplashScreen.types';

export function SplashScreen({ description }: ISplashScreen): JSX.Element {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-6 bg-white text-black overflow-hidden'>
      <VscLoading className='text-6xl text-blue animate-spin' />

      <p className='text-xl font-bold animate-up'>
        {description ? description : 'Carregando'}
      </p>
    </div>
  );
}
