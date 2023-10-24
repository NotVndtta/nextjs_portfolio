import React from 'react'
import GitHubIcon from "../../../public/github-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 '> 
        <div className=''>
            <h5 className='text-xl font-bold text-white my-2 '> Lets Connect </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'> 
                If you want you can always contact me by email, I will always take the time to answer you :3
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/NotVndtta">
                    <Image src={GitHubIcon} alt='GitHubIcon' />
                </Link>
                
                <Link href="https://github.com/NotVndtta">
                    <Image src={GitHubIcon} alt='GitHubIcon' />
                </Link>

            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium '> Your email</label>
                <input 
                type="email" 
                id='email' 
                required 
                className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='your_email@gmail.com'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='email' className='text-white block text-sm mb-2 font-medium '> Subject</label>
                <input 
                type="text" 
                id='subject' 
                required 
                className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Type something...'/>
            </div>
            <div className='mb-6 '></div>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
