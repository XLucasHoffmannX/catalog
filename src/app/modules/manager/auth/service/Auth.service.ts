import { HttpManager } from '@/app/api';

import { IAuthPayload, IAuthResponse } from '../types/auth.types';

class AuthService {
  async loginService(payload: IAuthPayload): Promise<IAuthResponse> {
    const { data } = await HttpManager.post('/auth', payload);

    return data;
  }
}

export default new AuthService();
