import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate Data Analyst,", "Creative Developer,", "Transformational Leader."],
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
          <span className="text-designColor capitalize">Danita Lamptey</span>
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
        An adept learner with a growth mindset passionate about contributing to innovative projects that combine data and compelling design to deliver exceptional user experiences.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
