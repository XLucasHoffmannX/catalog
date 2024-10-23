import { PiStorefrontDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { useProductManagerContext, useStoreContext } from '@/app/contexts';
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/resources/components/ui';
import { cn } from '@/shared/lib/utils';

import { useProductFilters } from './useProductFilters';

export function ProductFilters(): JSX.Element {
  const { handleChangeFilter } = useProductManagerContext();
  const { listStores } = useProductFilters();
  const { store } = useStoreContext();

  return (
    <div className='mt-4 flex items-center gap-4 flex-wrap'>
      <Input
        placeholder='Buscar por nome do produto...'
        className='w-[250px]'
        onChange={e => {
          handleChangeFilter({ search: e.target.value });
        }}
      />

      <Select
        value={store?.name}
        onValueChange={value => {
          console.log('teste', value);
        }}
      >
        <SelectTrigger
          className={cn(
            'flex items-center gap-1 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[150px]'
          )}
        >
          <SelectValue placeholder='Select an account'>
            <PiStorefrontDuotone className='text-primary' />
            <span className={cn('ml-2 max-w-[140px] truncate')}>
              {store?.name}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {listStores?.map((store, index) => (
            <SelectItem
              value={store.id}
              key={`${store.id}-i-${index}`}
            >
              <div className='flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground max-w-[140px] truncate'>
                <PiStorefrontDuotone className='text-primary' />
                {store.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link to='/add-product'>
        <Button className='text-white'>Adicionar +</Button>
      </Link>
    </div>
  );
}
