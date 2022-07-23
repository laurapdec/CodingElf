import React from "react";

function CompanyCard() {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h1 className="text-lg font-bold text-center mb-4">About Us</h1>
      <div className="text-justify">
        <div className="text-sm md:text-base lg:text-lg px-2 md:px-5 "> &nbsp; Hi, did you got here after spending hours searching for a solution for your problem? Do you find yourself overwhelmed by some forums answers?<br /><br />

        &nbsp;Don&apos;t worry, it&apos;s completely normal and a healthy sign that you&apos;re growing and becoming a better programmer. 
Though it&apos;s a gratifying journey, not all suffering is justified, sometimes we just want an easy way to find a solution for a bug or a complete understandable explanation on how to make a certain program.<br /><br />

&nbsp;That&apos;s what we&apos;re here for! We want to make your life easy way and grow as a community. None of us are expert programmers, but we all put ourselves out there everyday to someday be there, do you wanna join us?</div>
      </div>
    </div>
  );
}

export default CompanyCard;
