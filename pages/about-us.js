import React from 'react';
import Head from "next/head";
import {CompanyCard, ElfCard,ContactUs} from '../components'
import {  getAuthors, getCompanyBio } from "../services";
import Link from 'next/link';

function about_us({authors,companybio}) {
  console.log(authors);
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Os elfos</title>
        <meta name="description" content='Conheça a equipe por trás do Coding Elf, blog brasileiro de programação, data science e diversos outros temas, com o intuito de democratizar a tecnologia'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyCard text={companybio}/>
      
      <div className="grid grid-col-1 lg:grid-cols-4  gap-9">
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
