import React from "react";
import { Tag } from "../lib";



export default function Categories({tags , tagon=""}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <h2 className="mb-6 text-lg font-bold text-center">Tags</h2>
      <div >
        {tags.map((tag) => {
      if (tag.slug === tagon){
        return <Tag tag={tag} key={tag.slug} selected={true}/>
      } else {
        return <Tag tag={tag} key={tag.slug} />
      }
      
      })}
      </div>
    </div>
  );
}
