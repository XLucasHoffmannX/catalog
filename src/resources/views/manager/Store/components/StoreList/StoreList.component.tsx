import { StoreItem } from '../StoreItem/StoreItem.component';

import { useStoreList } from './useStoreList';

export function StoreList(): JSX.Element {
  const { listStores } = useStoreList();

  return (
    <div className='mt-8 flex items-center gap-3 flex-wrap md:justify-start justify-center'>
      {listStores?.map((store, index) => (
        <StoreItem
          key={`${store.id}-${index}`}
          store={store}
        />
      ))}
    </div>
  );
}
