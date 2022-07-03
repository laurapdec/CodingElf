import React from "react";
import moment from "moment";
import Link from "next/link";
import { Likes, Tag } from "../lib";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          layout="fill"
          className="object-top absolute h-80 w-full object-cover shadow-lg ronded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-300 text-center text-gray-800 mb-8 cursor-pointer hover:text-[#d0877a] text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex md:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center lg:w-auto mr-8">
          <Image
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.picture.url}
          />
          <p className="inline align-middle text-gray-600 ml-2 text-lg">
            {post.author.name} {post.author.surname}
          </p>
        </div>
        <div className="font-medium text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-[#5b858f]"
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
        <Likes likes={post.likes}  generalstyle={"ml-8"}/>
        
      </div>
      <div className="mb-8">
        {post.tag.map((tag) => (
          <Tag tag={tag} key = {tag.slug}/>
        ))}
      </div>
      
      <div className="text-gray-800 text-justify" dangerouslySetInnerHTML={{ __html: post.excerpt.html }} />
    </div>
  );
};

export default PostCard;
