import { LuContainer, LuLogOut, LuMenu, LuUser } from 'react-icons/lu';
import { RiDashboardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { ThemeModeToggle } from '@/resources/components/global';
import { Sheet, SheetContent, SheetTrigger } from '@/resources/components/ui';
import { Separator } from '@/resources/components/ui/separator';

import { LogoActionHeader } from '../LogoActionHeader/LogoActionHeader.component';
import { ItemLabelAndIcon, UserInformation } from '..';

import { ISidebarMobileProps } from './SidebarMobile.types';

export function SidebarMobile({ ...rest }: ISidebarMobileProps): JSX.Element {
  const { userAuthenticated, handleLogout, isManager } = useManagementSession();

  return (
    <div
      className='flex item-center md:hidden'
      {...rest}
    >
      <Sheet>
        <SheetTrigger>
          <LuMenu />
        </SheetTrigger>
        <SheetContent>
          <LogoActionHeader mobile />

          <UserInformation
            text={userAuthenticated?.login || ''}
            className='my-4'
          />

          <Separator />
          <div className='flex flex-col justify-center py-3 cursor-pointer gap-4'>
            <Link to='/my-account'>
              <ItemLabelAndIcon
                label='Minha conta'
                icon={<LuUser className='h-4 w-4' />}
              />
            </Link>

            {isManager && (
              <Link to='/manage'>
                <ItemLabelAndIcon
                  label='Gerenciar empresa'
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

            <div className='flex flex-row justify-between items-center gap-3'>
              <span className='font-bold text-sm'>Tema</span>
              <ThemeModeToggle />
            </div>
            <Separator />

            <ItemLabelAndIcon
              label='Sair'
              className='text-red-600'
              icon={<LuLogOut className='h-4 w-4' />}
              onClick={handleLogout}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
