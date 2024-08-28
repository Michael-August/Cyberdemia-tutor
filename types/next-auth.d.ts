import NextAuth from 'next-auth/next'; // eslint-disable-line unused-imports/no-unused-imports

declare module 'next-auth' {
  interface User {
    id: string;
    data: {
      token: string;
    };
  }

  interface Session {
    user: Partial<User>;
    token: token;
  }
  token: string;
}
