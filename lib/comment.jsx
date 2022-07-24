import React from 'react'
import moment from "moment";

function Comment({comment}) {
  return (
    <div className=' flex  p-3 gap-3 border-b border-gray-400  flex-wrap'>
        <h1 className="transition duration-300 text-gray-800 mb-2 cursor-pointer hover:text-[#d0877a] font-semibold">
            {comment.name}
        </h1>
        <div className='grid grid-cols-2 whitespace-nowrap w-full content-end '>
            {comment.message}
          <p className='text-end   mb-1'>{moment(comment._createdAt).format("MMM DD, YYYY")}</p>
        </div>
    </div>
  )
}

export default Comment