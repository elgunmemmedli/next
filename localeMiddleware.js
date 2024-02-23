import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'az', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(az|en|ru)/:path*']
};