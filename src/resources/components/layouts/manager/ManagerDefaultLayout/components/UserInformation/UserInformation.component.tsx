import { cn } from '@/shared/lib/utils';

import { IUserInformation } from './UserInformation.types';

export function UserInformation({
  text,
  subText,
  className
}: IUserInformation): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col justify-center py-3 max-w-[250px] truncate',
        className
      )}
    >
      <span className='font-bold text-xs max-w-[250px] truncate'>{text}</span>
      {subText && <span className='text-sm'>{subText}</span>}
    </div>
  );
}
