import Head from 'next/head';
import React, { useState } from 'react';
import { Layout } from '../components';
import '../styles/globals.css';
import { searchPosts } from '../services';


function MyApp({ Component, pageProps }) {
  const [searchResults, setSearchResults] = useState([]); // Initialize search results state

  const handleSearch = async (query) => {
    // Perform search using query
    const results = (await searchPosts(query)) || [];
    setSearchResults(results); // Update search results state
  };

  return (
    <>
    <Head >
      <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8'/>
      <meta name='viewport' content='width=device-width' initialScale='1'/>
    </Head>
    <Layout handleSearch = {handleSearch} >
      <Component {...pageProps} searchResults={searchResults}  />
    </Layout>
    </>
  );
}

export default MyApp
