'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex flex-col mx-auto  md:flex-row px-10 md:px-25 gap-5 mb-10 max-w-7xl' id='hero'>

        <div className='flex flex-col items-start gap-6 flex-1'>
            <h1 className='font-mono text-2xl md:text-4xl'>Hi there, I'm Ralph Njambou a FullStack JS Developer</h1>
            <p className='text-xl'>
                I build high-performance, fullstack applications that are both beautiful and battle-tested
                . Currently focused on Next.js 15, Three.js, and Framer Motion.
            </p>

            <div className='flex flex-row gap-5 mt-5'>

            <a href='#contacts' className='px-4 py-2 bg-indigo-500 font-bold font-mono text-sm rounded-sm cursor-pointer text-white hover:opacity-80'> Let's Work together</a>
            <a href='#projects' className='px-4 py-2 bg-indigo-500 font-bold font-mono text-sm rounded-sm cursor-pointer text-white hover:opacity-80'>View my projects</a>
            </div>


        </div>

        <div className='flex-1'>
            <Image 
             src='/hero-image.webp'
             alt='hero-image' 
             className='aspect-auto object-contain rounded-xl'
             width={1024}
             height={1024}
             priority={true}
             />
        </div>

    </section>
  )
}

export default Hero