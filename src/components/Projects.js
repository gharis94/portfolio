import React from 'react';
import Breaker from './Breaker';
import { motion } from 'framer-motion';

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}
const projectVariant ={
    hidden:{opacity:0,scale:0.8},
    visible:{opacity:1,scale:1}
}

const Project =({title,imageUrl})=>{
    return(
        <motion.div 
        variants={projectVariant}
        className=' relative max-h-[400px] max-w-[400px]'
        >
            <div className='absolute hover:cursor-pointer opacity-0 h-full w-full hover:opacity-90 transition duration-500 flex flex-col items-center justify-center text-center p-16 z-10 bg-deep-blue'>
                <p className='font-playfair font-semibold text-2xl'>
                    {title}
                </p>
                <p className='font-playfair mt-7'>kjdslhfa;dsohnjasdf;joidn.msadvckslmvcsmxzvc</p>
            </div>
            <img src={imageUrl}/>
        </motion.div>

    )
}

const Projects = () => {
  return (
    <section id='projects' className='pt-24 pd-48'>
        <div className = 'mx-auto md:w-6/12' >
            <div className='flex  justify-center pt-32'>
                <p className='font-playfair text-5xl'>Pro<span  className='text-red'>jects</span></p>
            </div>
            <Breaker width="w-1/3" />
            <p className='text-center pt-10 pb-10'>lkbfliarewbcaesnfdukcaoire;ncaoinvcoaei;dnfvenaoi;dvaoe;idjfvkfdvn afd</p>
        </div>
        <div className='md:w-4/5 md:mx-auto'>
            <motion.div
                className='sm:grid sm:grid-cols-3  flex justify-center flex-wrap'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.2}}
                variants={container}
            >
                <Project title='Messaging App' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-1.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-2.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-3.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-4.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-5.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-6.jpeg?raw=true'/>
                <Project title='Social Media' imageUrl='https://github.com/ed-roh/react-portfolio/blob/master/public/assets/project-7.jpeg?raw=true'/>
            </motion.div>
        </div>
            
        
        
    
    </section>
  )
}

export default Projects;