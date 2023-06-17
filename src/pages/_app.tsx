import AuthLayout from '@/layouts/AuthLayout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';

const opensans = Open_Sans({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return getLayout(
    <main className={opensans.className}>
      <Component {...pageProps} />
    </main>
  );
}
