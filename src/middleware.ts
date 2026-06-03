import { NextRequest, NextResponse } from "next/server";
import { fallbackLng, languages } from "./i18n/settings";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  const locale = fallbackLng;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|images|icons|.*\\..*).*)",
  ],
};
