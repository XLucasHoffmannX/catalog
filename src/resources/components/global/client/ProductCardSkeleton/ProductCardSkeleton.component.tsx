import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/resources/components/ui/card';

import { Skeleton } from '../../../ui';

export function ProductCardSkeleton(): JSX.Element {
  return (
    <Card className='shadow-md w-full md:w-96 mb-10 flex flex-col justify-between'>
      <CardHeader>
        <Skeleton className='h-4 w-[200px]' />
        <Skeleton className='h-4 w-[290px]' />
        <Skeleton className='h-4 w-[290px]' />
      </CardHeader>

      <CardContent>
        <Skeleton className='h-[300px] w-[300px]' />
      </CardContent>

      <CardFooter>
        <div className='w-full flex flex-col gap-2'>
          <Skeleton className='h-4 w-[150px]' />
          <Skeleton className='h-4 w-[50px]' />

          <Skeleton className='h-[36px] w-full' />
          <Skeleton className='h-[36px] w-full' />
        </div>
      </CardFooter>
    </Card>
  );
}
