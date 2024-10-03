import { AiOutlineProduct } from 'react-icons/ai';
import { LuHome, LuListChecks } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { CentralActionItem, LogoActionHeader } from '../';

export function CentralActions(): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <LogoActionHeader separator />

      <div className='flex items-center gap-4'>
        <Link to='/home'>
          <CentralActionItem
            icon={<LuHome className='w-5 h-5 text-primary ' />}
            label='Inicio'
            labelProps='text-sm font-medium'
          />
        </Link>

        <Link to='/orders'>
          <CentralActionItem
            icon={<LuListChecks className='w-5 h-5 text-primary ' />}
            label='Pedidos'
          />
        </Link>

        <Link to='/products'>
          <CentralActionItem
            icon={<AiOutlineProduct className='w-5 h-5 text-primary ' />}
            label='Produtos'
          />
        </Link>
      </div>
    </div>
  );
}
