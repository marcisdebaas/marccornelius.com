import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If path starts with /en, redirect to the same path without /en
  if (pathname.startsWith("/en/") || pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/en/:path*"],
};
