import { Skeleton } from '@/resources/components/ui';

export function HeaderSkeleton(): JSX.Element {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Skeleton className='size-20 rounded-full bg-primary' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px] bg-primary' />
        <Skeleton className='h-4 w-[200px] bg-primary' />
      </div>
    </div>
  );
}
