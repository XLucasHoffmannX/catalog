import { ComponentProps } from 'react';

export interface IDefaultClientHeaderProps extends ComponentProps<'div'> {
  hiddenSearch?: boolean;
  pageGeneral?: boolean;
}
