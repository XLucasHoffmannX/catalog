import {
  DefaultClientCartFloat,
  DefaultClientCategories,
  DefaultClientHeader
} from './components';

import { IDefaultLayoutProps } from './DefaultClient.types';

export function DefaultClientWrapper({
  children,
  pageGeneral
}: IDefaultLayoutProps): JSX.Element {
  return (
    <div>
      <div className='h-screen w-screen flex justify-center items-center overflow-x-hidden relative bg-secondary'>
        <div className='w-full max-w-[1920px] h-full  bg-secondary '>
          <DefaultClientHeader pageGeneral={pageGeneral} />

          <div className='mt-8 p-3 flex flex-col gap-3 animate-up items-center'>
            <DefaultClientCategories />

            {/* scroll order */}
            <>{children}</>
          </div>
        </div>
      </div>
      <DefaultClientCartFloat />
    </div>
  );
}
