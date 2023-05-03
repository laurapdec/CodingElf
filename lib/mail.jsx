import React from "react";
import Link from "next/link";

function Mail({size, styleoptions=""}) {
  var finalstyle = styleoptions ;

  if (styleoptions === ""){
    var finalstyle = "fill-gray-800 hover:fill-[#d0877a] transition duration-500 transform hover:-translate-y-2 ";
  }
  return (
    <a target="_blank" href="mailto:coding.elf@outlook.com" rel="noopener noreferrer" aria-label="Nos envie um email">
      <span className="cursor-pointer  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className={finalstyle}
          width={size}
          height={size}
        >
          <path
            id="Mail"
            d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6 h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017 L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003 L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14 C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401 c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981 l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
          />
        </svg>
      </span>
    </a>
  );
}

export default Mail;
