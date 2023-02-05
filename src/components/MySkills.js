import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion';
import Breaker from './Breaker';

const MySkills = () => {
    const isAboveSmallScreen= useMediaQuery('min-width:1060px')
  
    return (
        <section id='skills' className=' '>
            <div className='mt-1 flex flex-col sm:flex-row '>
                <motion.div
                    className = 'md:max-w-sm sm:basis-1/2 sm:pt-10 flex flex-col justify-center items-center '
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}    
                >
                    <p className='font-playfair flex justify-center text-5xl  mt-20 sm:mt-2'>My <span className='text-red'>Skills</span></p>
                    <div  className = 'w-2/3 flex justify-center' >
                        <Breaker width='w-full'/>
                    </div>
                    
                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >
                    <ul className='md:ml-28  space-y-2'>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>Tailwind CSS</li>
                        <li>Git</li>
                        <li>Redux</li>
                        <li>REST API </li>
                        <li>Nivo Charts </li>
                        <li>Figma </li>
                        
                    </ul>
                </motion.div>
                </motion.div>
                <div className='md:ml-52 sm:basis-1/2 my-10 md:pt-20 flex justify-center'>
                    <img className=' hover:cursor-pointer hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[350px]' src='https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/clipart3323238.png?alt=media&token=3dcd6189-dec7-4777-933d-17e66206febc'/>
                </div>
            
            </div>
            <div className='md:flex  justify-between md:mt-10'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Experince</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'/>
                    </div>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,y:-50},
                        visible:{opacity:1,y:0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl mt-2xl'>Innovative</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute top-0 right-0 z-[-1]'/>
                    </div>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:-50},
                        visible:{opacity:1, y:0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl mt-2xl'>Problem Solver</p>
                        </div>
                        <div className='h-32 w-1/2 md:w-3/4 bg-red absolute right-0 top-0 z-[-1]'/>
                    </div>
                </motion.div>            
            </div>
        </section>
    
  )
}

export default MySkills