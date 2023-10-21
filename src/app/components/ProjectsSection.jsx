"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
const projectsData = [
    {
        id: 1,
        title: "Title 1",
        description: "Desc 1",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Title 2",
        description: "Desc 2",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Title 3",
        description: "Desc 3",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Title 4",
        description: "Desc 4",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Title 5",
        description: "Desc 5",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Title 6",
        description: "Desc 6",
        image: "" ,
        tag: ["",""],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
        <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Front</button>
      </div>
      <div>{projectsData.map((project)=> (
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image} 
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      /> 
      )
      )}
      </div>
    </>
  )
}

export default ProjectsSection
