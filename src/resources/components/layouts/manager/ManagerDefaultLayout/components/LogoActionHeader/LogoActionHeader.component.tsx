import { Link } from 'react-router-dom';

import { Separator } from '@/resources/components/ui/separator';

import { AccountSwitcher } from '../AccountSwitcher/AccountSwitch.component';

import { ILogoActionHeader } from './LogoActionHeader.types';

export function LogoActionHeader({
  mobile,
  separator
}: ILogoActionHeader): JSX.Element {
  return (
    <Link to='/home'>
      <div className='flex items-center gap-3'>
        <AccountSwitcher mobile={mobile} />

        {separator && (
          <Separator
            orientation='vertical'
            className='h-5'
          />
        )}
      </div>
    </Link>
  );
}
