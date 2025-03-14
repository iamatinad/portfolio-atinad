import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Danita Lamptey</h3>
        <p className="text-lg font-normal text-gray-400">
          Analyst | Developer | Designer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I bridge the gap between creativity and functionality, designing, analyzing, and developing solutions that are both innovative and user-friendly.
        </p>
       
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">lamptey.danita@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
         
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/danita-lamptey"> <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft