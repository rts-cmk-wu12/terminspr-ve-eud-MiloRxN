import { NextResponse } from 'next/server'
import { getUserInfo } from '@/utils/get-user-info'

const instructorOnlyRoutes = ['/hold'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const visited = request.cookies.get('visited');

  if (!visited && !pathname.includes('/velkommen')) {
    const response = NextResponse.redirect(new URL('/velkommen', request.url))
    response.cookies.set('visited', 'true', { path: '/' })
    return response
  }

  const { isInstructor } = await getUserInfo(request);
  
  const requiresInstructor = instructorOnlyRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (requiresInstructor && !isInstructor) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
}
