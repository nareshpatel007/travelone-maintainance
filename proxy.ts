import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files, api routes, next internal assets, and the root homepage
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/common") ||
    pathname.startsWith("/partnership") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect any other route back to homepage
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
