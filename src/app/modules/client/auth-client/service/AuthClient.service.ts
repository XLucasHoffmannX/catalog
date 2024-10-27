import { HttpClient } from '@/app/api/client/client';

import {
  IAuthClientPayload,
  IAuthClientResponse
} from '../types/auth-client.types';

class AuthClientService {
  async authClientService(
    payload: IAuthClientPayload
  ): Promise<IAuthClientResponse> {
    const { data } = await HttpClient.post('/auth-client/', payload);

    return data;
  }
}

export default new AuthClientService();
