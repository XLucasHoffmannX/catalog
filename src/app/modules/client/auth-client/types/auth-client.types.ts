export interface IAuthClientPayload {
  client: string;
  password: string;
}

export interface IAuthClientResponse {
  token: string;
}

export interface IUseAuthClientPayload extends IAuthClientPayload {}
