import { CgOptions } from 'react-icons/cg';
import { Link } from 'react-router-dom';

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
            {store.name}
            <span className='font-light text-sm'>{store.title}</span>
          </div>
          <Link to={`/manage/store/${store.id}`}>
            <CgOptions className='text-primary cursor-pointer text-lg' />
          </Link>
        </CardTitle>
        <CardDescription>{store.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
