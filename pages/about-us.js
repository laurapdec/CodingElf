import React from 'react';
import Head from "next/head";
import {CompanyCard, ElfCard} from '../components'
import { GetAuthors } from "../services";
import Link from 'next/link';

function about_us({authors}) {
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The Elves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyCard />
      
      <div className="grid grid-col-1 lg:grid-cols-3  gap-9">
        {authors.map((author) => (
          <ElfCard author={author.node} key={author.node.slug}  />
        ))}
      </div>
    </div>

    <div className='w-full bg-[#fffae2] block p-10'>
      <div className='text-lg font-bold text-center mb-4'>
      Contact Us
      </div>
      <div className='hover:text-[#a081a4] text-center mb-4'>
        <Link href={"mailto:coding.elf@outlook.com"}>coding.elf@outlook.com</Link>
      </div>
    </div>
    </>
  );
}

export default about_us


export async function getStaticProps() {
  const authors = (await GetAuthors()) || [];
  return {
    props: { authors },
  };
}
