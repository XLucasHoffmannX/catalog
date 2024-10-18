import { cn } from '@/shared/lib/utils';

import { IItemLabelAndIcon } from './ItemLabelAndIcon.component.types';

export function ItemLabelAndIcon({
  icon,
  label,
  className,
  labelProps,
  ...rest
}: IItemLabelAndIcon): JSX.Element {
  return (
    <div
      className={cn('flex flex-row items-center gap-3', className)}
      {...rest}
    >
      {icon}
      <span className={cn('font-bold text-sm', labelProps)}>{label}</span>
    </div>
  );
}
