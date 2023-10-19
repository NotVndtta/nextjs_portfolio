import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Title 1",
        description: "Desc 1",
        image: "" ,
        tag: ["",""]
    },
    {
        id: 2,
        title: "Title 2",
        description: "Desc 2",
        image: "" ,
        tag: ["",""]
    },
    {
        id: 3,
        title: "Title 3",
        description: "Desc 3",
        image: "" ,
        tag: ["",""]
    },
    {
        id: 4,
        title: "Title 4",
        description: "Desc 4",
        image: "" ,
        tag: ["",""]
    },
    {
        id: 5,
        title: "Title 5",
        description: "Desc 5",
        image: "" ,
        tag: ["",""]
    },
    {
        id: 6,
        title: "Title 6",
        description: "Desc 6",
        image: "" ,
        tag: ["",""]
    },
]

const ProjectsSection = () => {
  return (
    <>
      <h2>My projects</h2>
      <div>{projectsData.map((project)=> (
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image} /> 
      )
      )}
      </div>
    </>
  )
}

export default ProjectsSection
