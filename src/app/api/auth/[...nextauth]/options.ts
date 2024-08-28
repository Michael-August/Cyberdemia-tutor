import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { AuthOptions, User } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { baseUrl } from '../../../../../utils/constants';
import { request } from '../../../../../utils/request';

const credentialsProviderOptions: any = {
  name: 'Login',
  credentials: {
    email: {
      label: 'Email Address',
      type: 'email',
      placeholder: 'john2gmail.com',
    },
    password: { label: 'Password', type: 'password', placeholder: 'Password' },
  },
  authorize: async (credentials: any) => {
    if (credentials?.email === '' || credentials?.password === '') {
      return null;
    }

    const { email, password } = credentials || { email: 'example@gmail.com' };
    try {
      const json = await request('POST', `${baseUrl}/instructor-login`, {
        data: { email, password },
      });

      if (json.status && json.data && json.data.token) {
        const user: User = {
          data: {
            token: json.data.token,
          },
          id: '',
        };
        return user;
      }
    } catch (err) {
      return null;
    }
    return null;
  },
};

export const authOptions: AuthOptions = {
  providers: [CredentialsProvider(credentialsProviderOptions)],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access = user.data.token;
      }
      await Promise.resolve();
      return token;
    },
    async session({ session, token }) {
      session.token = token.access;
      await Promise.resolve();
      return session;
    },
  },

  pages: {
    signIn: '/signin',
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
