import { CgOptions } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { BadgeStatus } from '@/resources/components/global';
import { Button } from '@/resources/components/ui';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/resources/components/ui/card';

import { IStoreItemProps } from './StoreItem.types';

export function StoreItem({ store }: IStoreItemProps): JSX.Element {
  return (
    <Card className='hover:scale-105 transition-all duration-300 md:w-[300px] w-full'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between mb-3'>
          <div className='flex flex-col gap-2'>
            <div className='mb-2 max-w-[70px]'>
              <BadgeStatus status={store?.status || false} />
            </div>
            {store.title}
            <span className='font-light text-sm'>{store.name}</span>
          </div>
          <Link to={`/manage/store/${store.id}`}>
            <CgOptions className='text-primary cursor-pointer text-lg' />
          </Link>
        </CardTitle>
        <CardDescription className='flex flex-col justify-between gap-3'>
          <p
            className='max-w-[200px] truncate'
            title={store.description}
          >
            {store.description}
          </p>
          <div className='flex items-center justify-end'>
            <Link
              to={`//${store.domain}.${window.location.hostname}${
                window.location.port ? `:${window.location.port}` : ''
              }`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button disabled={!store?.status}>Acessar loja</Button>
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
