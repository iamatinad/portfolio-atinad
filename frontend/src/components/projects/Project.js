import React from 'react'
import Title from '../layouts/index.js'
import { project1, ziibo, project11 , project15, project16, project20, project50,project09, atinance} from "../../assets/index.js";
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
          title="MarabFoods"
          des=" Built a dynamic agro website with React, showcasing agricultural products.
          Connecting sellers with potential buyers"
          src={project1}
          githubUrl="https://github.com/iamatinad/marabfoods"

   
          
        />
        <ProjectsCard
          title="Ziibo"
          des=" Developed Ziibo a visually-appealing movie web app built with React for browsing, searching, and discovering your next cinematic film."
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
          title="Todo App"
          des=" Built a todo app and fetched the API from a todo API I created"
          src={project09}
          githubUrl="https://github.com/iamatinad/Todo-app"
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
