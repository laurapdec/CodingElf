import React from 'react'
import Github from './github'
import Instagram from './instagram'
import Likes from './likes'
import Mail from './mail'
import Twitter from './twitter'
import ScrollUp from './scrollup'

function FloatingBar({likes,id=""}) {
  if (likes != undefined) {
    return (
      <>
        <div className='hidden md:block fixed bottom-5 right-5  rounded-full '>
            <div className='bg-red-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-red-700 '><Likes likesinit={likes} size={"30px"} heartstyle={"ml-2"} id={id}/></div>
            <div className='bg-pink-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-pink-700'><Instagram size={"30px"} styleoptions={"mx-1"}/></div>
            <div className='bg-blue-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-blue-700'><Twitter size={"30px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-300 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-gray-800'><Github size={"30px"} styleoptions={"mx-1"}/></div>
            <div className='bg-yellow-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-yellow-700'><Mail size={"30px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-300 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-black/80 text-black/80 cursor-pointer hover:bg-gray-500'><ScrollUp size={"30px"} styleoptions={"mx-1"}/></div>
        </div>

        <div className='fixed md:hidden bottom-5 right-1  rounded-full '>
            <div className='bg-red-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-red-700'><Likes likesinit={likes} size={"20px"} generalstyle={"flex items-center"} heartstyle={" ml-2"}  id={id}/></div>
            <div className='bg-pink-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-pink-700'><Instagram size={"20px"} styleoptions={"mx-1"}/></div>
            <div className='bg-blue-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-blue-700'><Twitter size={"20px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-600 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-gray-800'><Github size={"20px"} styleoptions={"mx-1"}/></div>
            <div className='bg-yellow-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-yellow-700'><Mail size={"20px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-300 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-black/80 text-black/80 cursor-pointer hover:bg-gray-500'><ScrollUp size={"20px"} styleoptions={"mx-1"}/></div>
        </div>
      </>
    );
  } 
  
  return (
    <>
      <div className='hidden md:block fixed bottom-5 right-5  rounded-full '>
          <div className='bg-pink-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-pink-700'><Instagram size={"30px"} styleoptions={"mx-1"}/></div>
          <div className='bg-blue-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-blue-700'><Twitter size={"30px"} styleoptions={"mx-1"}/></div>
          <div className='bg-gray-600 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-gray-800'><Github size={"30px"} styleoptions={"mx-1"}/></div>
          <div className='bg-yellow-500 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-yellow-700'><Mail size={"30px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-300 my-2 rounded-full w-16 h-16 justify-center flex items-center fill-black/80 text-black/80 cursor-pointer hover:bg-gray-500'><ScrollUp size={"30px"} styleoptions={"mx-1"}/></div>
      </div>

      <div className='fixed md:hidden bottom-5 right-1  rounded-full '>
          <div className='bg-pink-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-pink-700'><Instagram size={"20px"} styleoptions={"mx-1"}/></div>
          <div className='bg-blue-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-blue-700'><Twitter size={"20px"} styleoptions={"mx-1"}/></div>
          <div className='bg-gray-600 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-gray-800'><Github size={"20px"} styleoptions={"mx-1"}/></div>
          <div className='bg-yellow-500 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-white/80 text-white/80 cursor-pointer hover:bg-yellow-700'><Mail size={"20px"} styleoptions={"mx-1"}/></div>
            <div className='bg-gray-300 my-2 rounded-full w-12 h-12 justify-center flex items-center fill-black/80 text-black/80 cursor-pointer hover:bg-gray-500'><ScrollUp size={"20px"} styleoptions={"mx-1"}/></div>
      </div>
    </>
  );
}

export default FloatingBar