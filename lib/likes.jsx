import React,{useState} from "react";
import {addLike} from "../services"

function Likes({id, likesinit = 0, notClickedYet = true, generalstyle="", heartstyle="",textstyle ="",size="24px"}) {
  var heartstylefinal = heartstyle + " inline cursor-pointer";
  const [lik, setLikesQtd] = useState(likesinit);

  if (heartstyle === ""){
    var heartstylefinal = " inline  fill-gray-600  hover:fill-pink-400 transition ease duration-300 cursor-pointer";
  }

  const onSubmit =event =>{
    if (notClickedYet){
      setLikesQtd(lik+1);
      addLike(id);
      event.currentTarget.disabled=true;
    }

  };

  return (
    <button className={generalstyle} id="LikeButton" onClick={onSubmit}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={heartstylefinal}
        viewBox="0 0 230 230"
        width={size}
        height={size}
      >
        <path
          d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
	c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
	C235.26,57.99,236.537,96.466,213.588,120.982z"
        />
      </svg>
      <span className={textstyle + " mx-2"}>{lik}</span>
    </button>
  );
}

export default Likes;
