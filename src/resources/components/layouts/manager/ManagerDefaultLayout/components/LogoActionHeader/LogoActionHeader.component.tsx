import { LuRotate3D } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Separator } from '@/resources/components/ui/separator';
import { cn } from '@/shared/lib/utils';

import { ILogoActionHeader } from './LogoActionHeader.types';

export function LogoActionHeader({
  mobile,
  separator
}: ILogoActionHeader): JSX.Element {
  return (
    <Link to='/home'>
      <div className='flex items-center gap-3'>
        <LuRotate3D className='w-6 h-6  text-primary' />
        <span
          className={cn(
            'text-base font-bold',
            !mobile ? 'hidden md:block' : null
          )}
        >
          Manager
        </span>
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
