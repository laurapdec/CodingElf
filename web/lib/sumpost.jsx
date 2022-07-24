import React from 'react'
import Image from 'next/image'
import moment from "moment";
import Tag from './tag';
import Link from 'next/link';
import Likes from './likes';

function SummPost({post}) {
  return (
    <div className=' flex  p-3 gap-3 border-b border-gray-400  flex-wrap'>
        <h1 className="transition duration-300 text-gray-800 mb-2 cursor-pointer hover:text-[#d0877a] font-semibold">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className='grid grid-cols-2 whitespace-nowrap w-full content-end '>
          <Likes likes={post.likes} id={post._id}/>
          <p className='text-end   mb-1'>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        </div>
    </div>
  )
}

export default SummPost