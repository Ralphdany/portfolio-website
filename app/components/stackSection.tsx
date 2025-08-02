'use client'
import Image from 'next/image'
import { frontendImages, backendImages, databaseImages } from '../constants/images'

const TechStack = () => {
  return (
    <section className='px-10 md:px-25 w-full mx-auto py-10 mb-20 max-w-7xl'>
        <section className='flex flex-col md:flex-row gap-10 mb-10 border-b-1 p-5 border-gray-300/60'>
            <div className='flex-1'>
                <h2 className='text-xl md:text-3xl font-mono font-bold'>FRONTEND</h2>
            </div>
            <div className=' grid grid-cols-2 justify-start max-[425px]:grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5'>

                {frontendImages.map((image, index) => (
                    <div key={index} className='flex-1 flex flex-row items-center gap-2 '>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='object-contain' />
                        <span className='flex-1 text-xl md:text-2xl'>{image.name}</span>
                    </div>
                ))}
            </div>

        </section>
        <section className='flex flex-col md:flex-row gap-10 mb-10 p-5 border-b-1 border-gray-300/60'>
            <div className='flex-1'>
                <h2 className='text-xl md:text-3xl font-mono font-bold'>BACKEND</h2>
            </div>
            <div className='grid grid-cols-2 justify-start max-[425px]:grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5'>

                {backendImages.map((image, index) => (
                    <div key={index} className='flex-1 flex flex-row items-center gap-2 '>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='object-contain' />
                        <span className='flex-1 text-xl md:text-2xl'>{image.name}</span>
                    </div>
                ))}
            </div>

        </section>
        <section className='flex flex-col md:flex-row gap-10 p-5 mb-10 border-b-1 border-gray-300/60'>
            <div className='flex-1'>
                <h2 className='text-xl md:text-3xl font-mono font-bold'>DATABASE</h2>
            </div>
            <div className='grid grid-cols-2 justify-start max-[425px]:grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5'>

                {databaseImages.map((image, index) => (
                    <div key={index} className='flex-1 flex flex-row items-center gap-2 '>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='object-contain' />
                        <span className='flex-1 text-xl md:text-2xl'>{image.name}</span>
                    </div>
                ))}
            </div>

        </section>
    </section>
  )
}

export default TechStack