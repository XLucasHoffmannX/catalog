import * as React from 'react';

import { ChevronsUpDown, Plus } from 'lucide-react';
import { PiStorefrontDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import { useStoreContext } from '@/app/contexts';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Skeleton,
  useSidebar
} from '@/resources/components/ui';
import { cn } from '@/shared/lib/utils';

import { useStoreSwitcher } from './useStoreSwitcher';

export function StoreSwitcher() {
  const { state, isMobile } = useSidebar();

  const { company, isManager } = useManagementSession();
  const { listStores, isLoadingListStores } = useStoreSwitcher();
  const { store, handleSetStore } = useStoreContext();

  const isLoading = isLoadingListStores || typeof isManager === 'undefined';

  if (isLoading) {
    return <Skeleton className='h-[50px] w-[240px]' />;
  }

  const verifySwitch =
    !isLoadingListStores && listStores && listStores?.length > 0;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground  flex items-center justify-center'
            >
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                <PiStorefrontDuotone className='size-4' />
              </div>

              <div
                className={cn(
                  'grid flex-1 text-left text-sm leading-tight',
                  state === 'collapsed' && 'hidden'
                )}
              >
                <span className='truncate font-semibold'>
                  {verifySwitch && isManager ? store?.name : company?.name}
                </span>

                {verifySwitch && isManager && (
                  <span className='truncate text-xs flex items-center gap-2'>
                    <div
                      className={cn(
                        'bg-green-500 w-[10px] h-[10px] rounded-full',
                        !store?.status && 'bg-red-500'
                      )}
                    ></div>
                    {store?.status ? 'Online' : 'Offline'}
                  </span>
                )}
              </div>

              <ChevronsUpDown
                className={cn('size-8', state === 'collapsed' && 'hidden')}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            {verifySwitch && isManager && (
              <>
                <DropdownMenuLabel className='text-xs text-muted-foreground'>
                  Lojas
                </DropdownMenuLabel>
                {listStores?.map((str, index) => (
                  <DropdownMenuItem
                    key={str.name}
                    className='gap-2 p-2'
                    onClick={() => {
                      handleSetStore(str);
                      toast.info(`Loja alterada para ${str.title}`);
                    }}
                  >
                    <div className='flex size-6 items-center justify-center rounded-sm border'>
                      <PiStorefrontDuotone className='size-4 shrink-0' />
                    </div>
                    {str.title}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
              </>
            )}

            <DropdownMenuItem>
              <Link
                to={managerRoutes.manageAddStore}
                className='gap-2 flex'
              >
                <div className='flex size-6 items-center justify-center rounded-md border bg-background'>
                  <Plus className='size-4' />
                </div>
                <div className='font-medium text-muted-foreground'>
                  Adicionar uma loja
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
