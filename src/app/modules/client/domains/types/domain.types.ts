/* eslint-disable @typescript-eslint/no-empty-object-type */

import { IClient, IThemeVariables } from '@/shared/types';

/* GET_DOMAIN */
export interface IGetDomainPayload {
  domain: string;
}

export interface IGetDomain {
  client: IClient;
  theme: IThemeVariables;
}

export interface IUseGetDomainPayload extends IGetDomainPayload {}

export interface IUseGetDomain {
  data: IGetDomain | null;
  isLoading: boolean;
  isFetching: boolean;
}
/*  */

export interface IUseGetClient {
  client: IGetDomain['client'] | undefined;
  theme: IGetDomain['theme'] | undefined;
  token: string | undefined;
  isLoading: boolean;
}
