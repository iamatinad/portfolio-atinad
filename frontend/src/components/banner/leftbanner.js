import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate  Analyst,", "Creative Developer,", "Cloud Leader."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY DYNAMIC WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Danita </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#2691F5"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
           A lifelong learner helping brands elevate with data, design, development and beyond.        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
