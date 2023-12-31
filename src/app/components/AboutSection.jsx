"use client";
import React, {useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Ruby on Rails</li>
        <li>Next.js</li>
      </ul>
    )
    },
    {
      title: "Education",
      id:"education",
      content: (
        <ul className='list-disc pl-2'>
          <li>Gymnasium 1 named after A.S. Pushkin</li>
          <li>SevGU IVT</li>
        </ul>
      )
    },
  {
    title:"Certifications",
    id:"certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Backend developer practice CrimeaDigital</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

const handleTabChange = (id) => {
    startTransition(() => 
    {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16'>
            <Image src="/images/me2.jpg" 
            className='rounded-full' width={300} height={300}   
        />
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
    <h2 className='tetx-4xl font-bold text-white pt-8'> About Me </h2>
    <p className='text-base lg:text-lg pt-2'>
    Super promising motivated guy who will soon become a full frontend developer. 
      <br/>
      And in the future a full stack developer.
      <br/>
      In a few years will become a citizen of Dominica. <br></br>
      He loves Sevastopol and himself very much.
    </p>
    <div className='flex flex-row justify-start mt-8'>
      <TabButton selectTab = {() => handleTabChange("skills")} active={tab==="skills"}> 
      {" "} 
      Skills {" "} </TabButton> 
    
      <TabButton selectTab = {() => handleTabChange("education")} active={tab==="education"}> 
      {" "}
      Education {" "} </TabButton> 
      
      <TabButton selectTab={() => handleTabChange("certifications")} 
      active={tab === "certifications"}> 
      {" "} 
      Certifications {" "} </TabButton> 
    </div>
      <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
    </div>
    </section>
  )
}

export default AboutSection
