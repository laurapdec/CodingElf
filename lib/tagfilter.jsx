import React from "react";
import Tag from "./tag";

function TagFilter({tags, tagon={"slug":undefined,"title":undefined}}) {

  return (
    <div className=" lg:hidden shadow-lg bg-black/10 mx-auto w-full inline-block h-18 rounded-full px-3 py-1 mb-8 cursor-pointer  ">
        <div className="flex items-center ">
            <span className="text-center w-full text-sm font-bold">Filters</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15px"
                height="15px"
                className="mx-2"
                viewBox="0 0 330 330"
            >
                <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
            </svg>
        </div>
        <div className="w-full flex ">
          {tags.map((tag)=>{
            if (tag.slug === tagon.slug){
              return <Tag tag={tag} key={tag.slug} selected={true}/>
            } else {
              return <Tag tag={tag} key={tag.slug} />
            }
            })}
        </div>
    </div>
  );
}

export default TagFilter;
