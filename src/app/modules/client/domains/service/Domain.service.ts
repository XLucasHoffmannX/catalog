import { HttpClientAuth } from '@/app/api/client/client';
import { env } from '@/app/config';

import { useGetDomainMock } from '../mocks/get-domain-mock/useGetDomain.mock';

import {
  IDomainClient,
  IGetDomain,
  IGetDomainClientPayload,
  IGetDomainPayload
} from '../types/domain.types';

export class Domain {
  async getDomain(payload: IGetDomainPayload): Promise<IGetDomain | null> {
    if (env.VITE_MOCK_API === 'enabled') {
      return await useGetDomainMock(payload);
    }

    return null;
  }

  async getDomainClient({
    domain
  }: IGetDomainClientPayload): Promise<IDomainClient> {
    const { data } = await HttpClientAuth.get(`/client/domains/${domain}`);

    return data;
  }
}

export default new Domain();
