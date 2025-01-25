import React from 'react';
import Title from '../layouts/index.js';
import {   project11, project15, project16,  atinance, ati, bd, chess, git, movie, edc } from "../../assets/index.js";
import ProjectsCard from './Projectscard.js';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 hover animate-pulse">
        
      <ProjectsCard
          title="EDC Tracker"
          des="A seamless app built with appsheet to keep record and track attendance using QRCodes. "
          src={edc}
          githubUrl="https://github.com/iamatinad/EDC-Tracker"
        />

<ProjectsCard
          title="GitHub Top Languages"
          des="Evaluated repositories to identify top 10 programming language usage with BigQuery and Looker. "
          src={git}
          liveUrl="https://lookerstudio.google.com/reporting/b44dfd94-2869-4293-9c05-f98e4c59a144"
          githubUrl="https://github.com/iamatinad/data_analytics_projects/tree/main/top_10_github_languages"
        />
        

      <ProjectsCard
          title="Chess Database"
          des="Developed a chess database that can retrieve and analyze player, ratings,  games and  statistics using SQLite3."
          src={chess}
          liveUrl="https://youtu.be/H2bM19teFm4"
          githubUrl="https://github.com/iamatinad/data_analytics_projects/tree/main/chess_db"
        />
       
        <ProjectsCard
          title="Atinance"
          des="An expense tracker MERN Stack web app to help users control their finances by tracking their expenses."
          src={atinance}
          liveUrl="https://atinance-app.vercel.app/"
          githubUrl="https://github.com/iamatinad/atinance-app"
        />
        <ProjectsCard
          title="Ziibo"
          des="Collaborated with a team of 3 on Ziibo, a visually appealing movie web app built for discovering films."
          src={movie}
         liveUrl="https://ziibo-main.vercel.app/"
          githubUrl="https://github.com/iamatinad/ziibo-main"
        />

<ProjectsCard
          title="Birthday Gif Site"
          des="Built a user-friendly birthday gif site using HTML, CSS, and JS to celebrate my sister on her birthday."
          src={bd}
          liveUrl="https://ardie-bd.vercel.app/"
          githubUrl="https://github.com/iamatinad/ardie.bd"
        />

        <ProjectsCard
          title="Google Clone"
          des="Built my version of Google using HTML and CSS, showcasing my eye for good design and a data project."
          src={ati}
          liveUrl="https://atinad-btl.vercel.app/"
          githubUrl="https://github.com/iamatinad/atinad-btl"
        />
        
       
       
        
        <ProjectsCard
          title="Xmas Flyer"
          des="Designed a delightful Christmas flyer to spread holiday cheer."
          src={project11}
        />
        <ProjectsCard
          title="Food Flyer"
          des="Created a mouth-watering food flyer design."
          src={project15}
        />
     
      </div>
    </section>
  );
}

export default Projects;
