import { PiStorefrontDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { useProductManagerContext } from '@/app/contexts';
import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/resources/components/ui';

import { useProductFilters } from './useProductFilters';

export function ProductFilters(): JSX.Element {
  const { filters, handleChangeFilter } = useProductManagerContext();
  const { listStores, onChangeSetSearchTerm } = useProductFilters();

  return (
    <div className='mt-4 flex items-center gap-4 flex-wrap'>
      <Input
        placeholder='Buscar por nome do produto...'
        className='w-[250px]'
        onChange={e => {
          onChangeSetSearchTerm(e.target.value);
        }}
      />

      <Select
        onValueChange={value => {
          handleChangeFilter({ storeId: value });
        }}
        disabled={!!filters.search}
      >
        <SelectTrigger className='w-[160px]'>
          <PiStorefrontDuotone className='text-primary' />
          <SelectValue placeholder='Todas as lojas' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={'none'}>
              <div className='flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground max-w-[140px] truncate'>
                Todas as lojas
              </div>
            </SelectItem>

            {listStores?.map((store, index) => (
              <SelectItem
                value={store.id}
                key={`${store.id}-i-${index}`}
              >
                <div className='flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground max-w-[140px] truncate'>
                  {store.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Link to={managerRoutes.addProduct}>
        <Button className='text-white'>Adicionar +</Button>
      </Link>
    </div>
  );
}
