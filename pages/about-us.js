import React from 'react';
import Head from "next/head";
import {ElfCard} from '../components'
import { GetAuthors } from "../services";

function about_us({authors}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The Elves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-col-1 lg:grid-cols-3  gap-9">
        {authors.map((author) => (
          <ElfCard author={author.node}  />
        ))}
      </div>
    </div>
  );
}

export default about_us


export async function getStaticProps() {
  const authors = (await GetAuthors()) || [];
  console.log(authors);
  return {
    props: { authors },
  };
}
