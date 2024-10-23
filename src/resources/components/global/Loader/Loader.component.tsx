import { VscLoading } from 'react-icons/vsc';

import { Portal } from '../Portal';

import { ILoaderProps } from './Loader.types';

export function Loader({
  isLoading = false,
  showText = true,
  message
}: ILoaderProps): JSX.Element | null {
  if (!isLoading) {
    return null;
  }

  return (
    <Portal containerId='loader-root'>
      <div className='fixed top-0 left-0 w-full h-screen bg-white bg-opacity-50 flex flex-col justify-center items-center z-[55] cursor-wait'>
        <VscLoading className='text-6xl text-blue animate-spin' />
        {showText && (
          <p className='mt-2 text-xl font-bold text-black'>
            {message ?? 'Carregando'}
          </p>
        )}
      </div>
    </Portal>
  );
}
