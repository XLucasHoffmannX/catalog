import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { TbCloudCancel } from 'react-icons/tb';

import { cn } from '@/shared/lib/utils';

import { Badge } from '../../ui';

import { IBadgeStatusProps } from './BadgeStatus.types';

export function BadgeStatus({
  status,
  description,
  descriptionSuccess
}: IBadgeStatusProps): JSX.Element {
  return (
    <>
      <Badge
        className={cn(
          ' flex items-center gap-1 bg-green-500 hover:bg-green-400',
          !status && 'bg-red-500 hover:bg-red-400'
        )}
      >
        {status ? (
          <>
            <RiVerifiedBadgeFill />
            {descriptionSuccess ? descriptionSuccess : 'Online'}
          </>
        ) : (
          <>
            <TbCloudCancel />
            {description ? description : 'Offline'}
          </>
        )}
      </Badge>
    </>
  );
}
