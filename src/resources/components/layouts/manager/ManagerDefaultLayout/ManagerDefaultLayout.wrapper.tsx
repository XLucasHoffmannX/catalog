import { SidebarMobile } from './components/SidebarMobile/SidebarMobile.component';
import { CentralActions, UserPopover } from './components';

import { IManagerDefaultLayotProps } from './ManagerDefaultLayout.types';

export function ManagerDefaultLayoutWrapper({
  children,
  ...rest
}: IManagerDefaultLayotProps): JSX.Element {
  return (
    <div
      className='h-screen  overscroll-contain '
      {...rest}
    >
      <div className='w-full border-b flex items-center justify-between p-4'>
        <CentralActions />

        <UserPopover />

        <SidebarMobile />
      </div>

      <div className='h-full animate-up'>
        <div className='h-100 w-[98%] md:w-[100%] flex flex-col gap-6  mb-48'>
          {children}
        </div>
      </div>
    </div>
  );
}
