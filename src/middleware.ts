import { NextRequest, NextResponse } from "next/server";


export function middleware(request:NextRequest){
    const isLoggin=request.cookies.get('token');
    if(!isLoggin && request.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/login',request.url));
    }

    return NextResponse.next()

}

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}