import React from 'react'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = ({setSelected}) => {

    return (
    <section id='home' className='md:flex  md:justify-between md:items-center md:h-full gap-10 py-10'>

        <div className='md:order-2 flex justify-center basis-
        3/5'>
            
           <img className = ' hover:cursor-pointer hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px]'
            src = 'https://firebasestorage.googleapis.com/v0/b/restaurent-app-83b4c.appspot.com/o/bit-removebg-preview.png?alt=media&token=f32a71ee-3c17-420d-a4b5-ff25d9f37fca' / >
             
        </div>
        <div  className='z-30 basis-2/5 md:ml-20 mt-20 md:mt-32'>
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
                <p className='mt-20 mb-7 text-lg text-center md:text-start'>React JS Developer</p>
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
                className='mt-5'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.5,duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <a className='px-3' href='https://www.facebook.com/Gharisbinqasim/'><FacebookIcon/></a>
                <a className='px-3' href='https://twitter.com/gbq_94'><TwitterIcon/></a>
                <a className='px-3' href='https://github.com/gharis94'><GitHubIcon/></a>
                <a className='px-3' href='https://www.linkedin.com/in/gharis-qasim-3433190516/'><LinkedInIcon/></a>

                
            </motion.div>
        </div>
    </section>
  )
}

export default Home

//brus = https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/brush.png
//https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/profile-image.png