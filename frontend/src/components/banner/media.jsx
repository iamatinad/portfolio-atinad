import React from "react";
import {

  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiMicrosoftexcel,  SiGooglebigquery, SiSqlite} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" title="Linkedin">
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
          <span className="bannerIcon" title="SQL">
            <BsFiletypeSql />
          </span>
        
          <span className="bannerIcon" title="Excel">
            <SiMicrosoftexcel />
          </span>
           <span className="bannerIcon" title="BigQuery">
            <SiGooglebigquery />
          </span>
          <span className="bannerIcon" title="React">
            <FaReact />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
