import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [GitHub]
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
