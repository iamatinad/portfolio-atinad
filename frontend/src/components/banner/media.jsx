import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiMicrosoftexcel, SiGithub, SiNotion } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaInstagramSquare />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNotion />
          </span>
          <span className="bannerIcon">
            <SiMicrosoftexcel />
          </span>
          <span className="bannerIcon">
            <SiGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
