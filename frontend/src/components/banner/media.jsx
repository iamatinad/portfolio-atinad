import React from "react";
import {

  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiMicrosoftexcel,  SiGooglebigquery, SiSqlite} from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/danita-lamptey">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
           SKILLED IN
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiSqlite />
          </span>
        
          <span className="bannerIcon">
            <SiMicrosoftexcel />
          </span>
           <span className="bannerIcon">
            <SiGooglebigquery />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
