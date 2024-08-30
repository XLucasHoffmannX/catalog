import { ComponentProps } from 'react';

export interface IContentProps extends ComponentProps<'div'> {
  className?: string | undefined;
  title?: string;
  isBack?: boolean;
  onBack?: () => void;
}
