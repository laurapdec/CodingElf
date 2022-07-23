import React from 'react';
import Head from "next/head";
import {CompanyCard, ElfCard,ContactUs} from '../components'
import { getAuthors } from "../services";
import Link from 'next/link';
import client from '../client'

function about_us({authors}) {
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Os elfos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyCard />
      
      <div className="grid grid-col-1 lg:grid-cols-3  gap-9">
        {authors}
      </div>
    </div>

    <ContactUs/>
    </>
  );
}

export default about_us


export async function getStaticProps() {
  const authors = (await getAuthors()) || [];
  const auts = await client.fetch(
    `*[_type == "author" ]{name,bio}`
  )
  console.log(auts);

  return {
    props: { auts },
  };
}
