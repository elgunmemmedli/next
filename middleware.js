import {NextResponse} from 'next/server';
import { isAuth } from './is-auth';
import createIntlMiddleware from 'next-intl/middleware';
 
const locales = ['en', 'az', 'ru'];
const privatePage = ['/add', '/dashboard',];
 
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en'
});

 
export default function middleware(req) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${privatePage
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPrivatePage = publicPathnameRegex.test(req.nextUrl.pathname);
 
  if (isPrivatePage && !isAuth(req.cookies)) {
      return NextResponse.redirect(new URL("/login", req.url));
  } else if(isPrivatePage && isAuth(req.cookies)) {
    return intlMiddleware(req);  
  }else {
    return intlMiddleware(req);  
  }
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};