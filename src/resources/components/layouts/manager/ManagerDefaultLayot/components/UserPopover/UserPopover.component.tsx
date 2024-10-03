import { LuChevronDown, LuContainer, LuLogOut, LuUser } from 'react-icons/lu';
import { RiDashboardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { ThemeModeToggle } from '@/resources/components/global';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/resources/components/ui';
import { Button } from '@/resources/components/ui/button';
import { Separator } from '@/resources/components/ui/separator';

import { ItemLabelAndIcon } from '../ItemLabelAndIcon/ItemLabelAndIcon.component';
import { UserInformation } from '../UserInformation/UserInformation.component';

export function UserPopover(): JSX.Element {
  const { userAuthenticated, handleLogout, isManager } = useManagementSession();

  return (
    <div className='hidden md:flex flex-row gap-2'>
      <ThemeModeToggle />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='flex-row item-center gap-2 '
          >
            {userAuthenticated?.login}
            <LuChevronDown className='h-4 w-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='flex flex-col mx-4'>
          <UserInformation text={userAuthenticated?.login as string} />
          <Separator />
          <div className='flex flex-col justify-center py-3 cursor-pointer gap-4'>
            <Link to='/my-account'>
              <ItemLabelAndIcon
                label='Minha conta'
                icon={<LuUser className='h-4 w-4' />}
              />
            </Link>

            {isManager && (
              <Link to='/my-account'>
                <ItemLabelAndIcon
                  label='Gerenciar loja'
                  icon={<RiDashboardLine className='h-4 w-4' />}
                />
              </Link>
            )}

            <Link to='/history'>
              <ItemLabelAndIcon
                label='Histórico'
                icon={<LuContainer className='h-4 w-4' />}
              />
            </Link>

            <Separator />
            <ItemLabelAndIcon
              label='Sair'
              className='text-red-600'
              icon={<LuLogOut className='h-4 w-4' />}
              onClick={handleLogout}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
