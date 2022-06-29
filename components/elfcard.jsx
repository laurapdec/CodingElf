import React from 'react';
import Image from "next/image";

function ElfCard({author}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
        <div>
            <Image
                alt={author.name}
                className="align-middle p-5 w-full rounded-full"
                src={author.picture.url}
            />
        </div>
        <div className='text-center text-lg mb-5'>
            Hi, I&apos;m <strong>{author.name}</strong>
        </div>    
        <div className='px-2 md:px-8  '>
            {author.biography}
        </div>    
    </div>
  )
}

export default ElfCard
