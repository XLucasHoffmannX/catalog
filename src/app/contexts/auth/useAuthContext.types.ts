export type ITokenType = {
  exp: number;
  sub: string;
  role: string;
  id: number;
  empresa: string;
  expo: number;
};

export interface IUseAuthContext {
  userAuthenticated: ITokenType | null;
  expiresIn: number | null;
  handleSetUserAuth: (token: string) => void;
  handleLogout: () => void;
}
