import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from "./ui/magicButton"; 
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
      <Spotlight className='-top-40 left-50 md:-top-20 md:-left-12 h-screen' fill='blue' />
      <Spotlight className='-top-40 left-50 md:-top-40 md:-left-12 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='purple' />
      <Spotlight className='top-108 left-240 h-[80vh] w-[50vh]' fill='white' />
      <Spotlight className='top-108 left-240 h-[80vh] w-[50vh]' fill='white' />
    </div>
      
    <div>  
      <div className="absolute top-0 left flex h-[6rem] w-full items-center justify-center bg-white dark:bg-black" ></div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        )}
      />
      
      <div className='flex justify-center ' >
        <div className='max-w-[89vw]  md:max-w-2xl ld:max-w-[60vw] flex justify-center items-center'>
          <h1 className = 'uppercase tracking-widest text-1xl text-center  text-blue-100 max-w-80 rounded'>This is the small Magic Of Next.js</h1>
        </div>
      </div>
        <TextGenerateEffect 
          className='text-center text-[40px] md:text-5xl
          lg:text-6xl'
          words="Welcome to my portfolio!"
           />
    </div>
    <p className='text-purple-200 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi! Myself Ayush want to contribute my skills to the world for a good change is my dream</p>
      
    {/* button for the things */}

    <div className='flex justify-center  '>
        <a href="#about">
        <MagicButton
        title = "Show My Work"
        icon = {<FaLocationArrow/>}
        position = 'right'
        />
    </a>
    </div>
    
    </div> 

  )
}

export default Hero