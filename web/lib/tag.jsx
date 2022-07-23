import React from "react";
import Link from "next/link";

const Tag = ({ tag , selected=false}) => {
  const slug = tag.slug;
  const text = tag.title;
  var color = "[#5b858f]"
  var linkhref= `/tag/${slug}`
  var aditionalstyle = "";
  if(selected === true){
    var color = "blue-500";
    var linkhref= `/`;
    var aditionalstyle = "hover:bg-red-700 ";
  }
  
  var style = "bg-"+color+" text-white w-auto inline-block rounded-full p-1 p-1 "+aditionalstyle
  
  return (
    <div className="cursor-pointer inline-block w-auto m-1 hover:opacity-50 ">
      <Link key={slug} href={linkhref}>
        <div className={style}>
          <div className="mr-2 ml-1 inline-block fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="9px"
              height="9px"
            >
              <path d="M30.171,1.213c-0.018-0.252-0.216-0.451-0.468-0.468L17.859,0.002c-0.145-0.013-0.281,0.045-0.385,0.146L0.146,17.474c-0.195,0.195-0.195,0.513,0,0.707L12.732,30.77c0.094,0.095,0.221,0.146,0.354,0.146c0.133,0,0.26-0.053,0.354-0.146l17.328-17.329c0.104-0.103,0.154-0.241,0.146-0.386L30.171,1.213z M26.723,7.816c-0.968,0.967-2.656,0.967-3.623,0c-0.999-1-0.999-2.625,0-3.623c0.484-0.482,1.127-0.75,1.812-0.75c0.684,0,1.325,0.268,1.811,0.75C27.721,5.192,27.721,6.817,26.723,7.816z"></path>
            </svg>
          </div>
          <div className="inline-block mr-2 text-sm">
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tag;
