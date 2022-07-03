import React from "react";
import { PostSquare } from "./"

function SimilarPosts({posts}) {
  console.log(posts)
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h2 className="mb-6 text-lg font-bold text-center">
        This might interest you
      </h2>
      <div className=" flex justify-around">
          {posts.map((post) => (
                <PostSquare post={post.node} key={post.title} />
          ))}
      </div>
    </div>
  );
}

export default SimilarPosts;
