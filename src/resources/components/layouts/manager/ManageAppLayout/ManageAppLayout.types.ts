import { ReactNode } from 'react';

export type BreadcrumbItemType = {
  name: string;
  url?: string;
};

export interface IManageAppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItemType[];
}
