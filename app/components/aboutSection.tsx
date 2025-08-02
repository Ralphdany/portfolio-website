import React from 'react'

const About = () => {
  return (
    <section className='px-10 md:px-25 mx-auto py-10 mb-20 max-w-7xl' id='about'>
        <div className='py-2 border-b-1 border-gray-300/60 mb-10'>
            <p className='text-lg'>This is me</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 '>
            <div className='flex-1'>
               <h2 className='text-xl md:text-3xl font-mono font-bold'>Hi, I'm Ralph.</h2>
            </div>
            <div className='flex-1'>
                <p className='text-lg text-gray-300 mb-6'>
                    I'm a FullStack JavaScript Developer with a passion for building high-performance, fullstack applications that are both beautiful and battle-tested. 
                    Currently focused on Next.js 15, Three.js, and Framer Motion.
                </p>
                <p className='text-lg text-gray-300'>
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About