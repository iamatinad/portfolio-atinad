import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
     
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BA in Accounting & Economics"
            subTitle="University of Ghana (2018 - 2022)"
            result="Legon"
            des="Business-focused individual with a strong foundation in accounting and economics principles."
          />
           <ResumeCard
            title="Secondary School Education"
            subTitle="St Mary's Secondary School (2015 - 2018)"
            result="Korle Bu"
            des="Specialized in Business and broaden my skills."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="MEST AFRICA - (2024 )"
            result="Accra"
            des="Gained a strong foundational knowledge into various programming languages."
          />
         
        </div>
      </div>

     
    </motion.div>
  );
}

export default Education