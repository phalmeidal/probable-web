import { NextRequest, NextResponse } from "next/server";

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)', };

const publicRoutes = ['/', '/portal/cadastro', '/portal/login'];

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const token = req.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/portal/login', req.url));
    }


    return NextResponse.next();
}