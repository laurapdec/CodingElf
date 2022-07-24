import React from "react";
import {PortableText} from '@portabletext/react';
import { ptComponents } from "../lib";

function CompanyCard({text}) {
  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h1 className="text-lg font-bold text-center mb-4">Sobre nós</h1>
      <div className="text-justify">
        <div className="text-sm md:text-base lg:text-lg px-2 md:px-5 "> 
          <PortableText
                  value={text.body}
                  components={ptComponents}
              />
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
