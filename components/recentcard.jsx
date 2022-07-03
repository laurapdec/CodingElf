import React from 'react';
import {PostSquare} from './';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1020 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1020, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  

function RecentCard({ posts }) {
  

  const customLeftArrow = (
    <div className=" absolute shadow-xl flex arrow-btn left-0 justify-center py-3 cursor-pointer bg-[#a081a4] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute shadow-xl flex arrow-btn right-0 justify-center py-3 cursor-pointer bg-[#a081a4] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

    return (
    <div className=" shadow-lg bg-black/10  rounded-lg px-8 py-8 mb-8 mx-auto w-full  sm:px-4 lg:px-2 ">
        <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass=" sm:px-4 lg:px-6">
            {posts.map((post) => (
                <PostSquare post={post.node} key={post.slug} />
            ))}
        </Carousel>
    </div>
  )
}

export default RecentCard