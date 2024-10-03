import { SidebarMobile } from './components/SidebarMobile/SidebarMobile.component';
import { CentralActions, UserPopover } from './components';

import { IManagerDefaultLayotProps } from './ManagerDefaultLayout.types';

export function ManagerDefaultLayoutWrapper({
  children,
  ...rest
}: IManagerDefaultLayotProps): JSX.Element {
  return (
    <div
      className='h-screen w-screen overflow-hidden overscroll-contain '
      {...rest}
    >
      <div className='w-full border-b flex items-center justify-between p-4'>
        <CentralActions />

        <UserPopover />

        <SidebarMobile />
      </div>

      <div className='overflow-auto h-full animate-up'>
        <div className='h-100 w-100 flex flex-col p-4 gap-6 overflow-x-hidden mb-48'>
          {children}
        </div>
      </div>
    </div>
  );
}
