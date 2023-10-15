'use client';
import React, {useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => 
    {
      setTab(id);
    });
  }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16'></div>
            <Image src="/images/about-image.png" width={500} height={500} />

    <h2 className='tetx-4xl font-bold text-white mb-4'> About Me </h2>
    <p className='text-base lg:text-lg'>
      I am Dust
    </p>
    <div className='flex flex-row mt-8'>
      <TabButton selectTab = {() => handleTabChange("skills")} active={tab==="skills"}> Skills </TabButton> 
      <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 '> Skills </span>
    
      <TabButton selectTab = {() => handleTabChange("education")} active={tab==="education"}> Skills </TabButton> 
      <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 '> Education </span>
      
      <TabButton selectTab = {() => handleTabChange("certifications")} active={tab==="certifications"}> Skills </TabButton> 
      <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 '> Certifications </span>
      
    
    </div>
    </section>
  )
}

export default AboutSection
