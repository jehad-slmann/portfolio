"use client"

import { projects } from "@/constants";
import { useState } from "react";

import ProjectCard from "./ProjectCard";

const ProjectNavigator = () => {
    const pages = (projects.length % 4 == 0) ? projects.length / 4 : (projects.length / 4) + 1;
    const [currentPage, setCurrentPage] = useState(1)
    const leftClick = () => {
        if (currentPage > 1){
            setCurrentPage(prev => prev -1)
        }
    }
    const rightClick = () => {
        if(currentPage < Math.floor(pages)){
            setCurrentPage(prev => prev + 1)
        }
    }
    return(
        <>
        <div>
            <svg onClick={leftClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer w-[35px] h-[35px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
        </div>
        <section className="w-[80%] md:w-[60%] h-full min-h-[60vh] grid grid-cols-2 gap-10">
            {projects.map((project, idx) => (
                idx >= (4* (currentPage - 1)) && idx < (4 * currentPage) &&       
                <ProjectCard
                    key={idx}
                    img={project.img}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </section>
        <div>
            <svg onClick={rightClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer w-[35px] h-[35px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        </>
    )
}

export default ProjectNavigator;