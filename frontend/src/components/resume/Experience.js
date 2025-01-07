import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p> */}
          <h2 className="text-4xl font-bold"> Work Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Mindrift"
            subTitle="AI Tutor Editor(Freelance) (06/2024 - 07/2024)"
            result= "Remote"
            des="Honed problem solving and attention to details by evaluating AI responses against standards"
          />

          <ResumeCard
            title="Corextreme(Yooke)"
            subTitle="Web Developer Intern (02/2024 - 04/2024)"
            result= "Remote"
            des="Worked with a start-up company to develop a passenger portal"
          />
          <ResumeCard
            title="Account Officer"
            subTitle=" Tesah Capital(10/2022 - 10/2023)"
            result="Airport Residential"
            des="Managed clients' investment portfolio and kept proper record of transactions."
          />
          <ResumeCard
            title="Atinad Graphics and Tech"
            subTitle="Freelancer (08/2020 - 04/2021)"
            result= "Virtual"
            des="Freelance Content Creator who designed appealing visuals for clients and taught newbies designing"
          />
          
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
