import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

import { cn } from '@/shared/lib/utils';

import { Separator } from '../../ui';

import { useAccordionSection } from './useAccordionSection';

import { IAccordionSectionProps } from './AccordionSection.types';

export function AccordionSection({
  title,
  children,
  separator
}: IAccordionSectionProps): JSX.Element {
  const { visibleContent, onChangeVisibleContent } = useAccordionSection();

  return (
    <>
      <div className='mt-6 bg-neutral-50 p-4 rounded '>
        <div className='flex items-center justify-between'>
          <h1 className={cn('text-xl font-light', visibleContent && 'mb-5')}>
            {title}
          </h1>

          {visibleContent ? (
            <HiChevronDown
              className='text-2xl cursor-pointer'
              onClick={() => onChangeVisibleContent(false)}
            />
          ) : (
            <HiChevronUp
              className='text-2xl cursor-pointer'
              onClick={() => onChangeVisibleContent(true)}
            />
          )}
        </div>
        {visibleContent && <div className='animate-up'>{children}</div>}
      </div>

      {separator && <Separator className='my-4' />}
    </>
  );
}
