import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;