import {
  DefaultClientCartFloat,
  DefaultClientFilters,
  DefaultClientHeader
} from './components';

import { IDefaultLayoutProps } from './DefaultClient.types';

export function DefaultClientWrapper({
  children,
  pageGeneral
}: IDefaultLayoutProps): JSX.Element {
  return (
    <div className='h-screen w-screen flex justify-center items-center overflow-hidden relative bg-neutral-200'>
      <div className='w-full max-w-[1920px] h-full overflow-auto bg-white '>
        <DefaultClientHeader pageGeneral={pageGeneral} />

        <div className='mt-8 p-3 flex flex-col gap-3 animate-up items-center'>
          {!pageGeneral && <DefaultClientFilters />}

          {/* scroll order */}
          <>{children}</>
        </div>
      </div>

      <DefaultClientCartFloat />
    </div>
  );
}
