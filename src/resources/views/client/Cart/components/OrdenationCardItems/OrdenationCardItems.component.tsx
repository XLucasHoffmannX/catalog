import { IoChevronUpOutline } from 'react-icons/io5';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useShallow } from 'zustand/react/shallow';

import { useCartContext } from '@/app/contexts';

export function OrdenationCardItems(): JSX.Element {
  const [sortByDate, handleSortByDate] = useCartContext(
    useShallow(state => [state.sortByDate, state.handleSortByDate])
  );
  return (
    <div
      className='shadow-lg shadow-slate-500/30 border-input py-3 px-4 rounded-2xl bg-white flex flex-col gap-0 h-[55px] justify-center cursor-pointer'
      onClick={() => {
        handleSortByDate();
      }}
    >
      {sortByDate === 'default' && (
        <>
          <IoChevronUpOutline />
          <IoChevronDownOutline />
        </>
      )}
      {sortByDate === 'asc' && (
        <>
          <IoChevronUpOutline />
        </>
      )}

      {sortByDate === 'desc' && (
        <>
          <IoChevronDownOutline />
        </>
      )}
    </div>
  );
}
