import * as React from 'react';

import { LuRotate3D } from 'react-icons/lu';
import { PiStorefrontDuotone } from 'react-icons/pi';

import { useStoreContext } from '@/app/contexts';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton
} from '@/resources/components/ui';
import { cn } from '@/shared/lib/utils';

import { useAccountSwitcher } from './useAccountSwitcher';

interface IAccountSwitcherProps {
  isCollapsed?: boolean;
  mobile?: boolean;
}

export function AccountSwitcher({
  isCollapsed,
  mobile
}: IAccountSwitcherProps) {
  const { listStores, isLoadingListStores } = useAccountSwitcher();
  const { store, handleSetStore } = useStoreContext();
  const { company, isManager } = useManagementSession();

  const isLoading = isLoadingListStores || typeof isManager === 'undefined';

  if (isLoading) {
    return <Skeleton className='h-6 w-[130px]' />;
  }

  const verifySwitch =
    !isLoadingListStores && listStores && listStores?.length > 0;

  return (
    <>
      {verifySwitch && isManager ? (
        <Select
          value={store?.name}
          onValueChange={value => {
            const selectedStore = listStores?.find(store => store.id === value);

            if (selectedStore) {
              handleSetStore(selectedStore);
            }
          }}
        >
          <SelectTrigger
            className={cn(
              'flex items-center gap-1 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 ',
              isCollapsed &&
                'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
            )}
            aria-label='Select account'
          >
            <SelectValue placeholder='Select an account'>
              <PiStorefrontDuotone className='text-primary' />
              <span
                className={cn('ml-2 md:block hidden', isCollapsed && 'hidden')}
              >
                {store?.name}
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {listStores?.map((store, index) => (
              <SelectItem
                value={store.id}
                key={`${store.id}-i-${index}`}
              >
                <div className='flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground'>
                  <PiStorefrontDuotone className='text-primary' />
                  {store.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <>
          <LuRotate3D className='w-6 h-6 text-primary' />

          <span
            className={cn(
              'text-sm font-bold truncate max-w-[300px]',
              !mobile ? 'hidden md:block' : null
            )}
          >
            {company ? company.name : 'Manager'}
          </span>
        </>
      )}
    </>
  );
}
