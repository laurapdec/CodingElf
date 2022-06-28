import React from 'react';
import Head from "next/head";
import {Post} from '../../components';
import {getPosts} from '../../services';

function Article({post}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post}/>
    </div>
  )
}

export default Article
