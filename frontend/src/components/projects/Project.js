import React from 'react';
import Title from '../layouts/index.js';
import { project1, ziibo, project11, project15, project16, project20, project50, project09, atinance, ati, bd } from "../../assets/index.js";
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
          title="Atinance"
          des="An expense tracker MERN Stack web app to help users control their finances by tracking their expenses."
          src={atinance}
          liveUrl="https://atinance-app.vercel.app/"
          githubUrl="https://github.com/iamatinad/atinance-app"
        />
        <ProjectsCard
          title="Google Clone"
          des="Built my version of Google using HTML and CSS, showcasing my eye for good design."
          src={ati}
          liveUrl="https://atinad-btl.vercel.app/"
          githubUrl="https://github.com/iamatinad/atinad-btl"
        />
        <ProjectsCard
          title="Birthday Gif Site"
          des="Built a user-friendly birthday gif site using HTML, CSS, and JS to celebrate my sister on her birthday."
          src={bd}
          liveUrl="https://ardie-bd.vercel.app/"
          githubUrl="https://github.com/iamatinad/ardie.bd"
        />

       
        <ProjectsCard
          title="Ziibo"
          des="Developed Ziibo, a visually appealing movie web app built for browsing, searching, and discovering films."
          src={ziibo}
         liveUrl="https://ziibo-main.vercel.app/"
          githubUrl="https://github.com/iamatinad/ziibo-main"
        />
        <ProjectsCard
          title="AM AGENCY"
          des="Teamed up to build a user-friendly, responsive group portfolio website to effectively present our talents!"
          src={project20}
          githubUrl="https://github.com/iamatinad/portfolio-website-arab"
        />
        <ProjectsCard
          title="Recipe App"
          des="Built a recipe app, fetching data from a custom-designed recipe API."
          src={project50}
          githubUrl="https://github.com/iamatinad/recipe-app-beta"
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
        <ProjectsCard
          title="AG Logo"
          des="Spearheaded Atinad Graphics' branding with a captivating logo design."
          src={project16}
        />
      </div>
    </section>
  );
}

export default Projects;
