import { IUser } from '@/shared/types';

export interface IAuthPayload {
  login: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}

export interface IValidateAuthResponse extends IUser {}

export interface IUseGetValidateAuthProps {
  enabled: boolean;
}
