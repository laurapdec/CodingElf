import React from "react";
import Link from "next/link";
import { Tag } from "../lib";

const categories = [
  { name: "Python", slug: "python" },
  { name: "Javascript", slug: "javascript" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "Web development", slug: "web-dev" },
  { name: "Data science", slug: "data-science" },
];

function Categories() {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="mb-6 ">Tags</div>
      <div >
        {categories.map((category) => (
          <Tag text={category.name} slug={category.slug} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
