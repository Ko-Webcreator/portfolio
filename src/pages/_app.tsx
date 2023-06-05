import '@/styles/common/index.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
