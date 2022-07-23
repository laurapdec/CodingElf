import React from "react";
import moment from "moment";
import Link from "next/link";
import { Tag, Likes } from "../lib";
import Image from "next/image";

const PostSquare = ({ post }) => {
  return (
    <div className="relative h-72">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{ backgroundImage: `url('${post.image}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <Likes
          likesinit={post.likes}
          generalstyle={"flex absolute self-end top-5 right-5"}
          heartstyle={"fill-white/50"}
          textstyle={"text-white/50"}
          slug={post.slug}
        />
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {post.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.image}
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.author.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  );
};

export default PostSquare;