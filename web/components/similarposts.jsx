import React from "react";
import { SummPost } from "../lib";

function SimilarPosts({posts}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h2 className="mb-6 text-lg font-bold text-center">
        Isso também pode te interessar
      </h2>
      <div className=" block">
          {posts.map((post) => (
                <SummPost post={post.data} key={post._id} />
          ))}
      </div>
    </div>
  );
}

export default SimilarPosts;
