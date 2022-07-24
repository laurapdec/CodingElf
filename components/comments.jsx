import React from 'react'
import {Comment} from '../lib'

function Comments({comments}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h2 className="mb-6 text-lg font-bold text-center">
        Comentários
      </h2>
      {comments.map((comment) => (
        <Comment comment={comment.data} key={comment._id} />
      ))}
      <div className=" flex justify-around"></div>
    </div>
  )
}

export default Comments