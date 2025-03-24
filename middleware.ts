import { clerkMiddleware } from '@clerk/nextjs/server';

const middleware = clerkMiddleware();

export default async function (req, res) {
  console.log('Middleware is running for URL:', req.url);
  try {
    await middleware(req, res);
    console.log('Middleware executed successfully');
  } catch (error) {
    console.error('Middleware error:', error);
    res.status(500).send('Internal Server Error');
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
