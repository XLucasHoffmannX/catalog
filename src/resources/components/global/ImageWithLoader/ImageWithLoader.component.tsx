import { VscLoading } from 'react-icons/vsc';

import { useImageWithLoader } from './useImageWithLoader';

import { IImageWithLoaderProps } from './ImageWithLoader.types';

export function ImageWithLoader({
  src,
  alt
}: IImageWithLoaderProps): JSX.Element {
  const { handleImageLoad, isLoading } = useImageWithLoader();

  return (
    <div className='relative flex items-center justify-center w-[290px] h-[290px] '>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center w-full h-full'>
          <VscLoading className='text-6xl text-blue animate-spin' />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`max-w-[290px] max-h-[290px] w-full object-cover rounded-2xl ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
