import React from 'react'

function ElfCard({author}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
        <div>
            <img
                alt={author.name}
                className="align-middle p-5 w-full rounded-full"
                src={author.picture.url}
            />
        </div>
        <div className='text-center text-lg mb-5'>
            Hi, I'm <strong>{author.name}</strong>
        </div>    
        <div className='text-sm '>
            {author.biography}
        </div>    
    </div>
  )
}

export default ElfCard