/* eslint-disable @typescript-eslint/no-empty-object-type */

import { IClient, ICompany, IStore, IThemeVariables } from '@/shared/types';

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
  isLoading: boolean;
}

export type ThemeType =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet';

export interface ISetupStore {
  id?: string;
  themeType: ThemeType;
  setup: {
    client: IClient;
    theme: IThemeVariables;
  };
  store: IStore;
}

/* getDomainClient */
export interface IGetDomainClientPayload {
  domain: string;
}

export interface IDomainClient {
  store: IStore & {
    company: ICompany;
    storeSetup: ISetupStore;
  };
  theme: IThemeVariables;
}

export interface IUseGetDomainClientPayload extends IGetDomainClientPayload {
  enabled?: boolean;
}
