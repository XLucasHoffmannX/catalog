import { Link } from 'react-router-dom';

import { IManagerItemProps } from './ManagerItem.types';

export function ManagerItem({
  name,
  Icon,
  to
}: IManagerItemProps): JSX.Element {
  return (
    <Link
      to={to ? `/${to}` : '/'}
      className='md:w-[170px] w-full'
    >
      <div className='shadow-md border md:w-[170px] w-full  rounded-sm p-4 flex items-center justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300'>
        <Icon />

        <p>{name}</p>
      </div>
    </Link>
  );
}
