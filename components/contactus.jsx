import React from 'react';
import Link from 'next/link';
import { Github, Instagram, Mail, Twitter , ContactUsForm } from '../lib';

function ContacUs() {
  return (
    <div className='w-full bg-[#fffae2] block p-10'>
      <div className='grid grid-cols-3'>
        <h2 className="col-span-2 text-xl font-bold align-baseline text-center">Entre em contato</h2>
        <ContactUsForm/>

        <div className='grid grid-cols-4  p-8 pb-12 mx-auto lg:p-8'  >

          <Github size={"30px"}/>
          <div className='col-span-3 hover:text-[#a081a4]  justify-left mb-4'>
            <a target="_blank" href="https://www.github.com/laurapdec/codingelf" rel="noopener noreferrer">laurapdec/codingelf</a>
          </div>

          <Instagram size={"30px"}/>
          <div className='col-span-3 hover:text-[#a081a4]  justify-left mb-4'>
            <a target="_blank" href="https://www.instagram.com/coding.elf" rel="noopener noreferrer">@elf_coding</a>
          </div>

          <Twitter size={"30px"}/>
          <div className='col-span-3 hover:text-[#a081a4]  justify-left mb-4'>
            <a target="_blank" href="https://www.twitter.com/elf_coding" rel="noopener noreferrer">coding.elf</a>
          </div>

          <Mail size={"30px"}/>
          <div className='col-span-3 hover:text-[#a081a4]  justify-left mb-4'>
            <Link href={"mailto:coding.elf@outlook.com"}>coding.elf@outlook.com</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContacUs