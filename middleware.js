import { NextResponse } from 'next/server';

const isUserRoute = (pathname) => {
    return pathname.startsWith('/api/users');
}

const isAdminRoute = (pathname) => {
    return pathname.startsWith('/api/admin');
}

const isDeveloperRoute = (pathname) => {
    return pathname.startsWith('/api/developer')
}

export async function middleware(req) {
    const role = req.headers.get("authorization");
    const { pathname } = req.nextUrl;

    if (isUserRoute(pathname) && role !== "user") {
        return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    }

    if (isAdminRoute(pathname) && role !== "admin") {
        return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    }

    if (isDeveloperRoute(pathname) && role !== "developer") {
        return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/users/:path*', '/api/admin/:path*', '/api/developer/:path*']
};
