import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const protocol = request.headers.get('x-forwarded-proto');
  
  // If the request is over HTTP and we're not in development, redirect to HTTPS
  if (
    process.env.NODE_ENV === 'production' &&
    protocol &&
    protocol !== 'https'
  ) {
    const host = request.headers.get('host');
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = host || url.host;
    url.port = ''; // Ensure port isn't included in the redirect unless necessary, Next handles this mostly
    
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/(.*)',
};
