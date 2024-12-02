import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/shared/styles/theme/theme-provider';

import { useAccordionSection } from './useAccordionSection';

import { IAccordionSectionProps } from './AccordionSection.types';

export function AccordionSection({
  title,
  children
}: IAccordionSectionProps): JSX.Element {
  const { visibleContent, onChangeVisibleContent } = useAccordionSection();
  const { theme } = useTheme();

  return (
    <>
      <div
        className={cn('mt-6  rounded ', theme === 'light' && 'bg-neutral-50')}
      >
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
    </>
  );
}
