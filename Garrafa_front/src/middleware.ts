"use server"
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'js-cookie'

export default async function middleware(request: NextRequest, res: NextResponse) {
  const token = request.cookies.get('access_token')?.value;
  const userAvailable = await fetch(process.env.BACKEND_API + "/user/me", {
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token
    }
  })
  if (!userAvailable.ok) {
    Cookies.set("access_token", "")
    request.cookies.delete('access_token')
  }

  const signInURL = new URL('/', request.url);

  if (!token || !userAvailable.ok) {
    if (request.nextUrl.pathname === '/') return NextResponse.next();

    return NextResponse.redirect(signInURL);
  }
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};