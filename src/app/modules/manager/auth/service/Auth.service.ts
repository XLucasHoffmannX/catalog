import { HttpManager, HttpManagerAuth } from '@/app/api';

import {
  IAuthPayload,
  IAuthResponse,
  IValidateAuthResponse
} from '../types/auth.types';

class AuthService {
  async loginService(payload: IAuthPayload): Promise<IAuthResponse> {
    const { data } = await HttpManager.post('/user/auth', payload);

    return data;
  }

  async validteAuthService(): Promise<IValidateAuthResponse> {
    const { data } = await HttpManagerAuth.get('/user/validate');

    return data;
  }
}

export default new AuthService();
