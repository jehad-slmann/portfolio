import ProjectCard from '@/components/ProjectCard'
import React from 'react'

import {projects} from "@/constants"

const Projects = () => {
  return (
    <main
      style={{backgroundImage: "url(./images/bg3.jpg)"}}
      className="w-screen h-screen bg-cover bg-center"
    >
      <header className="w-[80%] md:max-w-[60%] mx-auto pt-[40px] pb-[60px]">
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold">My Projects</h2>
      </header>

      <div className="flex justify-evenly items-center">
        <section className="w-[80%] md:w-[60%] h-full min-h-[60vh] grid grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              img={project.img}
              title={project.title}
              description={project.description}
            />
          ))}
        </section>
      </div>

    </main>
  )
}

export default Projects