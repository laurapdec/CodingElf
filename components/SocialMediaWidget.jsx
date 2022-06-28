import React from "react";
import { Instagram, Github, Twitter } from "../lib";

function SocialMediaWidget() {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="mb-6 text-lg font-bold text-center">Follow us</div>
      <div className=" flex justify-around">
        <Instagram />
        <Github />
        <Twitter />
      </div>
    </div>
  );
}

export default SocialMediaWidget;
