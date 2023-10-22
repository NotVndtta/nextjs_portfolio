"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
const projectsData = [
    {
        id: 1,
        title: "ToDo App",
        description: "Today Tasks",
        image: "./images/projects/todoApp.jpg" ,
        tag: ["Front","All"],
        gitUrl: "https://github.com/NotVndtta/todoApp",
        previewUrl: "https://notvndtta.github.io/todoApp/"
    },
    {
        id: 2,
        title: "Slider",
        description: "",
        image: "./images/projects/slider2.jpg" ,
        tag: ["Front","All"],
        gitUrl: "https://github.com/NotVndtta/slider",
        previewUrl: "https://notvndtta.github.io/slider/"
    },
    {
        id: 3,
        title: "CrimeaDigital verstka",
        description: "Desc 3",
        image: "./images/projects/verstka2.jpg" ,
        tag: ["Front","All"],
        gitUrl: "https://github.com/NotVndtta/vestkaCrimeaDigital",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Fashion shop",
        description: "",
        image: "./images/projects/shop2.jpg" ,
        tag: ["Front","All"],
        gitUrl: "https://github.com/NotVndtta/verstka",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Speech converter",
        description: "",
        image: "./images/projects/speech_converter.jpg" ,
        tag: ["Front","All"],
        gitUrl: "https://github.com/NotVndtta/speech_converter",
        previewUrl: "https://notvndtta.github.io/speech_converter/"
    },
    {
        id: 6,
        title: "Instagram Clon",
        description: "Only backend on Ruby on Rails",
        image: "./images/projects/RoR1.jpg" ,
        tag: ["Back","All"],
        gitUrl: "https://github.com/NotVndtta/intagram",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
      <ProjectTag onClick={handleTagChange} 
      name="All" 
      isSelected={tag === "All"} 
      />  
      <ProjectTag onClick={handleTagChange} 
      name="Front" 
      isSelected={tag === "Front"} 
      />
      <ProjectTag onClick={handleTagChange} 
      name="Back" 
      isSelected={tag === "Back"} 
      />
      </div>
      <div>{filteredProjects.map((project)=> (
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
