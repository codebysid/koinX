import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const routes = ["/", "/coin"]

export function middleware(request: NextRequest) {
  if (routes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/coin/bitcoin', request.url))
  }
}
