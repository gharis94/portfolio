import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion';
import Breaker from './Breaker';

const MySkills = () => {
    const isAboveSmallScreen= useMediaQuery('min-width:1060px')
  
    return (
        <section id='skills'>
            <div className='mt-10 md:flex '>
                <motion.div
                    className='md:max-w-sm'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}    
                >
                    <p className='font-playfair text-5xl pl-5 mt-20'>My <span className='text-red'>Skills</span></p>
                    <Breaker width="w-1/3 md:w-3/12"/>
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
                    <p className='md:ml-20'>df;jkbsdvfkvjdsbnlvj ailkjdfvkadzfnvalkjv aoilkjrmvdsnccjaklsdc ajksldcadsnvjkazfvnojzkvfoi;wkjasdvnjkdsmvco;ikljdsacm;sadlkcsdcois</p>
                </motion.div>
                </motion.div>
                <div className='md:ml-52 md:mt-20'>
                    <img className=' hover:cursor-pointer hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[150px]' src='https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/profile-image.png'/>
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
                            <p className='font-playfair font-semibold text-3xl mt-2xl'>Future</p>
                        </div>
                        <div className='h-32 w-1/2 md:w-3/4 bg-red absolute right-0 top-0 z-[-1]'/>
                    </div>
                </motion.div>            
            </div>
        </section>
    
  )
}

export default MySkills