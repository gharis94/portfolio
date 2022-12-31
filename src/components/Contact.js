import React from 'react';
import Breaker from './Breaker';
import { motion } from 'framer-motion';
import {useForm} from 'react-hook-form'; 

const Contact = () => {
  const{trigger,register,formState:{errors}} =useForm();
  const handleSubmit=(e)=>{
    const isValid = trigger();
    if(isValid){
        e.preventDefault();
    }
  }
    return (
    <section id='contact' className='md:flex'>
        <motion.div
            className = 'md:pt-24  md:basis-1/2'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
                }}
        >   

            <p className='font-playfair text-3xl font-semibold'><span className='text-yellow'>CONTACT ME</span> TO GET STARTED</p>
            <div className='w-1/3'>
                <Breaker />
            </div>
            
            <div className='md:mt-28'>
                <form target='_blank' 
                action ="https://formsubmit.co/your@email.com"
                method = "POST"
                onSubmit={(e)=>handleSubmit(e)}>
                    <input
                        className='w-9/12 bg-blue placeholder-white pl-2 m-2 rounded-md'
                        type='text'
                        placeholder='Enter the Name'
                        {...register('name',{required:true})}
                    />
                    {errors.name && <span>The field is required</span>}
                    <input
                        className='w-9/12 bg-blue placeholder-white pl-2 m-2 rounded-md'
                        type='email'
                        placeholder='Enter the email'
                        {...register('email',{required:true,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                    />
                    <textarea
                        className='w-9/12 bg-blue pl-2 placeholder-white m-2 rounded-md'
                        cols='50'
                        rows='3'
                        placeholder='Enter Message...'
                    />
                    
                </form>
                <button className='bg-yellow pt-1 pb-1 pl-4 pr-4 mt-5 ml-2 hover:bg-red rounded-md'>Send</button>
            </div>
        
        </motion.div>
        <motion.div
            className = 'md:mt-24 md:basis-1/2'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}
        >
            <div className = 'flex justify-center items-center ' >
                <img className='rounded-md' src='https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact