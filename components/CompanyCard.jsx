import React from "react";

function CompanyCard() {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8 mx-auto w-full mx-auto  md:w-5/6 lg:mx-0  md:w-2/3 w-full lg:w-full ">
      <div className="text-lg font-bold text-center mb-4">About Us</div>
      <div className="text-justify">
        <div className="px-2 md:px-8 "> &nbsp; Hi, did you got here after spending hours searching for a solution for your problem? Do you find yourself overwhelmed by some forums answers?<br /><br />

        &nbsp;Don't worry, it's completely normal and a healthy sign that you're growing and becoming a better programmer. 
Though it's a gratifying journey, not all suffering is justified, sometimes we just want an easy way to find a solution for a bug or a complete understandable explanation on how to make a certain program.<br /><br />

&nbsp;That's what we're here for! We want to make your life easy way and grow as a community. None of us are expert programmers, but we all put ourselves out there everyday to someday be there, do you wanna join us?</div>
      </div>
    </div>
  );
}

export default CompanyCard;