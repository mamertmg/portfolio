import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import "../styles/globals.css";
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;