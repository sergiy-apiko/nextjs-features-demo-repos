import { Tokens, UserType } from '@/hooks/useCurrentUser';
import cookie from 'js-cookie';

const UserApi = {
  async refreshTokens() {
    const token = cookie.get('refresh_token');
    if (token) {
      const tokensRefesh = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL + '/auth/local/refresh',
        {
          method: 'POST',
          headers: {
            authorization: 'Bearer ' + token,
          },
        },
      );
      if (tokensRefesh.status === 200) {
        const tokens: Tokens = await tokensRefesh.json();
        for (const t in tokens) {
          cookie.set(t, token);
        }
        return this.getUser(tokens.access_token);
      }
    }
  },
  async getUser(
    refreshedToken?: string | undefined,
  ): Promise<UserType | null | undefined> {
    try {
      const token = !!refreshedToken
        ? refreshedToken
        : cookie.get('access_token');
      if (token) {
        const userResponse = await fetch(
          process.env.NEXT_PUBLIC_SERVER_URL + '/user/me',
          {
            headers: {
              authorization: 'Bearer ' + token,
            },
          },
        );
        if (userResponse.status === 200) {
          const data = await userResponse.json();
          return data;
        } else if (userResponse.status === 401 && !refreshedToken) {
          const d = await this.refreshTokens();
          return d;
        }
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
  async logOut(callback: () => any) {
    try {
      const req = await fetch('http://localhost:3000/auth/local/logout', {
        headers: {
          authorization: 'Bearer ' + cookie.get('access_token'),
        },
        method: 'POST',
      });
      if (req.status === 200) {
        cookie.remove('access_token');
        cookie.remove('refresh_token');
      }
      callback();
    } catch (err) {
      console.error(err);
    }
  },
};

export default UserApi;
