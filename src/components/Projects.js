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

const Project =({title,imageUrl,link})=>{
    return(
        <motion.div 
        variants={projectVariant}
        className=' relative h-[200px] w-[300px]'
        >
            <div className='absolute inset-0 hover:cursor-pointer opacity-0 h-full w-full hover:opacity-90 transition duration-500 flex flex-col items-center justify-center text-center p-16 z-10 bg-deep-blue'>
                <p className='font-playfair font-semibold text-2xl'>
                    {title}
                </p>
                <a href={link} className='font-playfair mt-7'>View App</a>
            </div>
            <div className=''>
                <img className='w-[300px] h-[200px] object-cover' src={imageUrl}/>
            </div>
            
        </motion.div>

    )
}

const Projects = () => {
  return (
    <section id='projects' className='pt-18 pd-48'>
        <div className = 'md:mx-auto md:w-6/12' >
            <div className='flex  justify-center pt-32'>
                <p className='font-playfair text-5xl'>Pro<span  className='text-red'>jects</span></p>
            </div>
            <Breaker width="w-1/3" />
            <p className='text-center pt-10 pb-10'>Following are some personal projects. For more projects, visit GITHUB</p>
        </div>
        <div className='md:w-4/5 md:mx-auto'>
            <motion.div
                className='sm:grid sm:grid-cols-3  flex justify-center flex-wrap'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.2}}
                variants={container}
            >
                <Project title='Amazon Clone' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/amazon-clone.JPG?alt=media&token=e5c6a98d-7127-4cf1-9775-b3d9b32d994f'
                    link = 'https://genuine-pudding-90faa2.netlify.app/'
                />
                <Project title='E-commerce App' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/ecommerce-3.JPG?alt=media&token=833640a2-ddb0-4e5f-b274-e19c7dc4a629'
                    link = 'https://6353e83d0ae320139b766737--phenomenal-bunny-c51071.netlify.app/'
                />
                <Project title='Quiz App' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/quiz-1.JPG?alt=media&token=f53fa9c6-7629-471c-93eb-92b3f875f3e2'
                    link = 'https://gentle-valkyrie-331976.netlify.app/'
                />
                <Project title='Restaurent ERP' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/2.JPG?alt=media&token=e77c5915-5ac0-408f-aec7-abc0d9cde83e'
                    link = 'https://classy-buttercream-e11ba7.netlify.app/'
                />
                <Project title='Expense Tracker App' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/3.JPG?alt=media&token=125550c2-1f14-4910-9227-55587dcee0a6'
                    link = 'https://expense-tracker-final.surge.sh/'
                />
                <Project title='Netflix Clone' imageUrl='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/344.JPG?alt=media&token=ce8c049a-1b2b-40ba-bad0-78362e0b274c'
                    link = 'https://6388d7d9d11ed50bd3854f5d--exquisite-jelly-3f1c1f.netlify.app/'
                />
                
            </motion.div>
        </div>
            
        
        
    
    </section>
  )
}

export default Projects;