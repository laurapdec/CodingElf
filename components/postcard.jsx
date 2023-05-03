import React from "react";
import moment from "moment";
import Link from "next/link";
import { Likes, ptComponents, Tag } from "../lib";
import Image from "next/image";
import {PortableText} from '@portabletext/react';

const PostCard = ({ post , tagon="" }) => { 
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post.image}
          alt={post.title}
          priority={true}
          layout="fill"
          className="object-top absolute h-80 w-full object-cover shadow-lg ronded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-300 text-center text-gray-800 mb-8 cursor-pointer hover:text-[#d0877a] text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex md:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center lg:w-auto md:mr-8 mb-2 md:mb-0">
          <Image
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.image}
          />
          <p className="inline align-middle text-gray-600 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-600  mb-2 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-[#557C86]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <Likes likesinit={post.likes}  generalstyle={"ml-8"} id={post._id}/>
        
      </div>
      <div className="mb-8">
        {post.categories.map((tag) => {
        if (tag.slug === tagon.slug){
          return <Tag tag={tag} key={tag.slug} selected={true}/>
        } else {
          return <Tag tag={tag} key={tag.slug} />
        }
        
        })}
      </div>
      
      <div className="text-gray-800 text-justify" >
        {post.description}
      </div>
    </div>
  );
};

export default PostCard;
