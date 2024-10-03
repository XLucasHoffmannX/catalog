import { ICardDahsboardProps } from './CardDahsboard.types';

export function CardDahsboard({
  title,
  Icon,
  value,
  description
}: ICardDahsboardProps): JSX.Element {
  return (
    <div className='border rounded-lg p-5 flex flex-col gap-4 w-[370px] shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
      <div className='flex items-center justify-between w-full gap-3'>
        <h2 className='font-medium text-lg'>{title}</h2>
        <Icon className='text-primary text-xl' />
      </div>
      <div>
        <h1 className='font-bold text-2xl'>{value}</h1>
      </div>
      <div>
        <span className='font-light text-sm'>{description}</span>
      </div>
    </div>
  );
}
