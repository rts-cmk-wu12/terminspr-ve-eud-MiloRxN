import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const visited = request.cookies.get('visited')

  if (!visited && !pathname.includes('/velkommen')) {
    const response = NextResponse.redirect(new URL('/velkommen', request.url))
    response.cookies.set('visited', 'true', { path: '/' })

    return response
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
}
