import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/resources/components/ui';

export function DefaultClientFilters(): JSX.Element {
  return (
    <div className='flex items-center gap-2 mb-6 max-w-[800px] w-full z-50'>
      <Select defaultValue='0'>
        <SelectTrigger className='bg-neutral-50 text-black'>
          <SelectValue placeholder='Ordernar' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='0'>Relevância</SelectItem>
            <SelectItem value='1'>Menor Preço</SelectItem>
            <SelectItem value='2'>Maior Preço</SelectItem>
            <SelectItem value='3'>Lançamento</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className='bg-neutral-50 text-black border border-solid border-gray-200'>
        Promoções 🔥
      </Button>
    </div>
  );
}
