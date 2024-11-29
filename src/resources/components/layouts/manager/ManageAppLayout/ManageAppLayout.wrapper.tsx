import { ThemeModeToggle } from '@/resources/components/global';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/resources/components/ui';

import { ManageAppSidebar } from './components';

import { IManageAppLayoutProps } from './ManageAppLayout.types';

export function ManageAppLayoutWrapper({
  children,
  breadcrumbs
}: IManageAppLayoutProps): JSX.Element {
  return (
    <SidebarProvider>
      <ManageAppSidebar />

      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between px-4'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />

            <Separator
              orientation='vertical'
              className='mr-2 h-4'
            />

            {breadcrumbs &&
              breadcrumbs?.length > 0 &&
              breadcrumbs.map((bread, index) => (
                <Breadcrumb key={`${bread.name}-${index}`}>
                  <BreadcrumbList>
                    {bread.name && bread.url && (
                      <BreadcrumbItem className='hidden md:block'>
                        <BreadcrumbLink to={bread.url}>
                          {bread.name}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}

                    {bread.name && !bread.url && (
                      <BreadcrumbItem>
                        <BreadcrumbPage>{bread.name}</BreadcrumbPage>
                      </BreadcrumbItem>
                    )}

                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className='hidden md:block' />
                    )}
                  </BreadcrumbList>
                </Breadcrumb>
              ))}
          </div>

          <ThemeModeToggle />
        </header>

        <div className='h-100 w-[98%] md:w-[100%] flex flex-col gap-6 mb-48 px-8 py-4 animate-up'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}