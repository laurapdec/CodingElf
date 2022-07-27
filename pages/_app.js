import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8'/>
      <meta name='viewport' content='width=device-width' initialScale='1'/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp
