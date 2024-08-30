import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { cn } from '@/shared/lib/utils';

import { IContentProps } from './Content.types';

export function Content({
  title,
  children,
  className,
  isBack,
  ...rest
}: IContentProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full',
        className
      )}
      {...rest}
    >
      {title && (
        <h2
          className='w-full mb-3 text-xl font-bold flex items-center gap-3'
          onClick={() => {
            if (isBack) navigate(-1);
            return;
          }}
        >
          {isBack && <IoChevronBack className='cursor-pointer' />}

          {title}
        </h2>
      )}

      {children}
    </div>
  );
}
