import React from "react";
import { Instagram, Github, Twitter ,Mail } from "../lib";

function SocialMediaWidget() {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8">
      <div className="mb-6 text-lg font-bold text-center">Join us</div>
      <div className=" flex justify-around">
        <Instagram size={`40px`}/>
        <Github size={`40px`} />
        <Twitter size={`40px`}/>
        <Mail size={`40px`}/>
      </div>
    </div>
  );
}

export default SocialMediaWidget;
