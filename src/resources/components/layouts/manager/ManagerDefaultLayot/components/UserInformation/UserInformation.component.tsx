import { cn } from '@/shared/lib/utils';

import { IUserInformation } from './UserInformation.types';

export function UserInformation({
  text,
  subText,
  className
}: IUserInformation): JSX.Element {
  return (
    <div className={cn('flex flex-col justify-center py-3', className)}>
      <span className='font-bold text-xs'>{text}</span>
      {subText && <span className='text-sm'>{subText}</span>}
    </div>
  );
}
