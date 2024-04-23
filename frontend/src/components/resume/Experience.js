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
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Corextreme(Yooke)"
            subTitle="Web Developer Intern (2024 - 2024)"
            result= "Remote"
            des="Worked with a start-up company to develop a passenger portal"
          />
          <ResumeCard
            title="Atinad Graphics and Tech"
            subTitle="Freelancer (2020 - 2022)"
            result= "Virtual"
            des="Freelance Content Creator who designed appealing visuals to meet clients needs"
          />
          
          <ResumeCard
            title="Account Officer"
            subTitle=" Tesah Capital(2022 - 2023)"
            result="Airport Residential"
            des="Managed clients' investment portfolio and kept proper record of transactions."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
