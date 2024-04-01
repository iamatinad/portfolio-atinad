import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


function Banner() {
    const [text] = useTypewriter({
        words: ["Creative Coder.", "Full Stack Developer.", "Graphic Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    return (
    <section
    id='home'
    className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
        <div>
            <div className="flex flex-col gap-5">
            <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-6xl font-bold text-white">Hello, I'm {" "}
                <span className="text-designColor capitalize">Danita Lamptey</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#2691F5"
          />
            <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation to make experiences clearer and guide users through interactions.
            My animations are not just for aesthetics, 
            but to enhance understanding and engagement.
        </p>
            </h2>
            </div>
        </div>
        <div></div>
        
        </section>
  )
}

export default Banner