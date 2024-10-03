import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import { create } from 'zustand';

import { ITokenType, IUseAuthContext } from './useAuthContext.types';

export const useAuthContext = create<IUseAuthContext>()(set => ({
  userAuthenticated: null,
  expiresIn: null,

  handleSetUserAuth: (token, user) => {
    if (token) {
      const decoded: ITokenType = jwtDecode(token);

      Cookies.set('access-token', token, {
        expires: decoded.exp
      });

      if (user) {
        set({ userAuthenticated: user });
      }

      if (decoded) {
        return set({ expiresIn: decoded.exp });
      }
    }

    return;
  },

  handleLogout: () => {
    Cookies.remove('access-token');

    set({ userAuthenticated: null });

    toast.info('Desconectado!');
  }
}));
