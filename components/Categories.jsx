import React from "react";
import { Tag } from "../lib";

const categories = [
  { name: "Python", slug: "python" },
  { name: "Javascript", slug: "javascript" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "Web development", slug: "web-dev" },
  { name: "Data science", slug: "data-science" },
];

export default function Categories({tags}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="mb-6 text-lg font-bold text-center">Tags</div>
      <div >
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  );
};
