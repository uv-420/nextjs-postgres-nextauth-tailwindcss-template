import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth';

const { auth } = NextAuth(authConfig);

export { auth as middleware };

// Don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
