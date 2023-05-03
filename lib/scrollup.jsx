import React from "react";

function ScrollUp({size=40,styleoptions="fixed rounded-full bottom-0 right-0 mx-2 my-20"}) {
    function handleClick (){
        window.scrollTo(0,0);
    }

  return (
    <button onClick={handleClick} aria-label="Scroll Up">
      <span className="cursor-pointer">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            fill="currentColor" 
            class={styleoptions}
            viewBox="0 0 16 16"
        > 
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/> 
        </svg>

      </span>
    </button>
  );
}

export default ScrollUp;


