import { LuBan } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Button } from '../../ui';

import { IErrorScreenProps } from './ErrorScreen.types';

export function ErrorScreen({
  description,
  isBackFrom,
  isBackText
}: IErrorScreenProps): JSX.Element {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-4'>
      <LuBan className='h-10 w-10 text-red-600' />
      {description ? description : 'Página não econtrada'}

      <Link to={isBackFrom ? isBackFrom : '/'}>
        <Button>{isBackText ? isBackText : 'Voltar'}</Button>
      </Link>
    </div>
  );
}
