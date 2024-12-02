import { Forward, MoreHorizontal } from 'lucide-react';
import { PiStorefrontDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { managerRoutes } from '@/app/router/routes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  Skeleton,
  useSidebar
} from '@/resources/components/ui';

import { useNavArea } from './useNavArea';

export function NavArea(): JSX.Element | null {
  const { isMobile } = useSidebar();

  const { listStores, isLoadingListStores } = useNavArea();
  console.log(listStores);

  if (isLoadingListStores) {
    return <Skeleton className='h-[120px] w-[240px] ml-2' />;
  }

  if (listStores && listStores.length > 0)
    return (
      <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
        <Separator className='mb-3' />

        <SidebarGroupLabel>Lojas</SidebarGroupLabel>
        <SidebarMenu>
          {listStores &&
            listStores.slice(0, 5).map((store, index) => (
              <>
                <SidebarMenuItem key={`${store.id}-${index}`}>
                  <SidebarMenuButton>
                    <PiStorefrontDuotone />
                    <span>{store.name}</span>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                        <span className='sr-only'>Mais</span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className='w-48 rounded-lg'
                      side={isMobile ? 'bottom' : 'right'}
                      align={isMobile ? 'end' : 'start'}
                    >
                      <DropdownMenuItem>
                        <Link
                          to={`${managerRoutes.manageStoreId}${store.id}`}
                          className='flex items-center'
                        >
                          <PiStorefrontDuotone className='text-muted-foreground size-4 mr-2' />
                          <span>Editar loja</span>
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link
                          to={`//${store.domain}.${window.location.hostname}${
                            window.location.port
                              ? `:${window.location.port}`
                              : ''
                          }`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center'
                        >
                          <Forward className='text-muted-foreground size-4 mr-2' />
                          <span>Acessar loja</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </>
            ))}

          <SidebarMenuItem>
            <SidebarMenuButton className='text-sidebar-foreground/70'>
              <Link
                to={managerRoutes.manageStore}
                className='flex items-center gap-2'
              >
                <MoreHorizontal className='text-sidebar-foreground/70' />
                <span>Ver todas</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    );

  return null;
}
