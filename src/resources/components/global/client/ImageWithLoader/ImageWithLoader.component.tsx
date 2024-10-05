import { VscLoading } from 'react-icons/vsc';

import { useImageWithLoader } from './useImageWithLoader';

import { IImageWithLoaderProps } from './ImageWithLoader.types';

export function ImageWithLoader({
  src,
  alt,
  maxW,
  maxH,
  rounded
}: IImageWithLoaderProps): JSX.Element {
  const { handleImageLoad, isLoading } = useImageWithLoader();

  return (
    <div
      className={`relative flex items-center justify-center ${
        maxW ? `w-[${maxW}]` : 'w-[290px]'
      } ${maxH ? `h-[${maxH}]` : 'h-[290px]'}`}
    >
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center w-full h-full'>
          <VscLoading className='text-6xl text-blue animate-spin' />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${maxW ? `w-[${maxW}]` : 'w-[290px]'} ${
          maxH ? `h-[${maxH}]` : 'h-[290px]'
        } w-full object-cover ${rounded ? rounded : 'rounded-2xl'}  ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
