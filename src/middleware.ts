import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    // index page is not available hence direct all requests to dashboard
    if (request.nextUrl.pathname.match(/^\/$/)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ['/', '/tutor/:path*'],
};
