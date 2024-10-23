import { HttpManager, HttpManagerAuth } from '@/app/api';

import {
  IAuthPayload,
  IAuthResponse,
  IRegisterPayload,
  IRegisterResponse,
  IValidateAuthResponse
} from '../types/auth.types';

class AuthService {
  async loginService(payload: IAuthPayload): Promise<IAuthResponse> {
    const { data } = await HttpManager.post('/user/auth', payload);

    return data;
  }

  async registerService(payload: IRegisterPayload): Promise<IRegisterResponse> {
    const { data } = await HttpManager.post('/user/register', payload);

    return data;
  }

  async validateAuthService(): Promise<IValidateAuthResponse> {
    const { data } = await HttpManagerAuth.get('/user/validate');

    return data;
  }
}

export default new AuthService();
