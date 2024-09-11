import { env } from '@/app/config';

import { useGetDomainMock } from '../mocks/get-domain-mock/useGetDomain.mock';

import { IGetDomain, IGetDomainPayload } from '../types/domain.types';

export class Domain {
  async getDomain(payload: IGetDomainPayload): Promise<IGetDomain | null> {
    if (env.VITE_MOCK_API === 'enabled') {
      return await useGetDomainMock(payload);
    }

    return null;
  }
}

export default new Domain();
