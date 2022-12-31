import React from 'react'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Home = ({setSelected}) => {
    const isAboveSmallScreen = useMediaQuery('min-width:1060px');
    return (
    <section id='home' className='md:flex  md:justify-between md:items-center md:h-full gap-10 py-10'>

        <div className='md:order-2 flex justify-center basis-
        3/5'>
            {
                isAboveSmallScreen? (
                <div className='relative -z-10 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
                    <img className=' hover:cursor-pointer hover:filter hover:saturation-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]' src='https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/profile-image.png'/>
                </div>
                ):(
                    <img className=' hover:cursor-pointer hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px]' src='https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/profile-image.png'/>
                )
            }
            
            
        </div>
        <div  className='z-30 basis-2/5 mt-20 md:mt-32'>
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
                <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                    Gharis {' '}
                    <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[40px] before:-top-[120px] before:z-[-1]'>Qasim</span>
                </p>
                <p className='mt-20 mb-7 text-sm text-center md:text-start'>hwerbcdilk hlidsbkfc ilsakjd fcilkdsfcilkdsnvcabsdv jadszv dzvf ihjakdzvi lkjadvn ilakjfdnv dsxz kn,vc</p>
            </motion.div>
            <motion.div
                className='flex mt-5 justify-center md:justify-start'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.5,duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <AnchorLink className='py-2 px-5 rounded-sm bg-gradient-rainblue text-deep-blue font-semibold  hover:bg-blue hover:text-white transition duration-500' onClick={()=>setSelected('contact')} href='#contact'>Contact</AnchorLink>
                <AnchorLink className = 'py-0.5 px-0.5 rounded-r bg-gradient-rainblue  font-semibold  '
                onClick = {
                    () => setSelected('contact')
                }
                href = '#contact'> 
                    <div className='bg-deep-blue text-white px-4  hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair'>
                        Lets' talk
                    </div>
                </AnchorLink>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.5,duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <FacebookOutlinedIcon/>
            </motion.div>
        </div>
    </section>
  )
}

export default Home

//brus = https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/brush.png