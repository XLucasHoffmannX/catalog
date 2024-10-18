import { cn } from '@/shared/lib/utils';

import { ICentralActionItem } from './CentralActionItem.types';

export function CentralActionItem({
  label,
  labelProps,
  icon
}: ICentralActionItem): JSX.Element {
  return (
    <div className='flex items-center gap-2 cursor-pointer '>
      {icon}
      <span className={cn('text-sm font-medium ', labelProps)}>{label}</span>
    </div>
  );
}
