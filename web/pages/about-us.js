import React from 'react';
import Head from "next/head";
import {CompanyCard, ElfCard,ContactUs} from '../components'
import {  getAuthors, getCompanyBio } from "../services";
import Link from 'next/link';

function about_us({authors,companybio}) {
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Os elfos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyCard text={companybio}/>
      
      <div className="grid grid-col-1 lg:grid-cols-3  gap-9">
      {authors.map((author) => (
          <ElfCard author={author.data} key={author._id}  />
        ))}
      </div>
    </div>

    <ContactUs/>
    </>
  );
}

export default about_us


export async function getStaticProps() {
  const authors = (await getAuthors()) || [];
  const companybio = (await getCompanyBio()) || [];

  return {
    props: {authors,companybio} ,
  };
}
