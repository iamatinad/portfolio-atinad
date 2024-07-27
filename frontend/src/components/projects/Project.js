import React from 'react'
import Title from '../layouts/index.js'
import { project1, ziibo, project11 , project15, project16, project20, project50,project09, atinance, ati,bd} from "../../assets/index.js";
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
          des=" An expense tracker MERN Stack web app to help users control their finances
           by tracking their expenses"
          src={atinance}
          githubUrl="https://atinance-app.vercel.app/"
   
        />
            <ProjectsCard
          title="Google clone"
          des=" Built my version of google using HTML and CSS
          showcasing my olympics project and eye for good design."
          src={ati}
          githubUrl="https://atinad-btl.vercel.app/"

   
          
        />

             <ProjectsCard
          title="Birthday Gif site"
          des=" Built a user-friendly birthday gif site using HTML, CSS 
          and JS to celebrate my sister on her birthday"
          src={bd}
          githubUrl="https://ardie-bd.vercel.app/"
            />
        <ProjectsCard
          title="Ziibo"
          des=" Developed Ziibo a visually-appealing movie web app built for browsing, searching, and 
          discovering your next cinematic film."
          src={ziibo}
          githubUrl="https://github.com/iamatinad/ziibo-main"
        />
        <ProjectsCard
          title="AM AGENCY"
          des=" Teamed up to build a user-friendly, responsive group portfolio website to effectively present our talents!"
          src={project20}
          githubUrl="https://github.com/iamatinad/portfolio-website-arab"
        />
        <ProjectsCard
          title="Recipe App"
          des=" Built a recipe app and fetched the API from a recipe API I designed"
          src={project50}
          githubUrl="https://github.com/iamatinad/recipe-app-beta"
        />
       

        
        <ProjectsCard
          title="Xmas Flyer"
          des=" Spreading holiday cheer! Designed a delightful Christmas flyer with warm wishes."
          src={project11}
        />
        <ProjectsCard
          title="Food Flyer"
          des="Made mouths water with a delicious food flyer design!"
          src={project15}
        />
        <ProjectsCard
          title="AG Logo"
          des=" Spearheaded Atinad Graphics' branding with a captivating logo design"
          src={project16}
        />
      </div>
    </section>
  );
}

export default Projects
