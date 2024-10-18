import { ComponentProps, ReactNode } from 'react';

export interface IItemLabelAndIcon extends ComponentProps<'div'> {
  icon: ReactNode;
  label: string;
  labelProps?: string;
}
