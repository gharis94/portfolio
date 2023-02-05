import { useEffect, useState } from 'react';
import './App.css';
import useMediaQuery from './hooks/useMediaQuery';
import NavBar from './components/NavBar';
import DotGroup from './components/DotGroup';
import Breaker from './components/Breaker';
import Home from './components/Home';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isTopOfPage,setIsTopOfPage] =useState(true);
  const [selected,setSelected] = useState('home')
  const isAboveSmallScreen = useMediaQuery('(min-width:1060px)');
  console.log(isAboveSmallScreen)
  
  useEffect(()=>{
    const listner=()=>{
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }else{
        setIsTopOfPage(true)
      }
    }
    console.log(isTopOfPage)
    window.addEventListener('scroll',listner);
    return ()=>window.removeEventListener('scroll',listner)
  },[])
  
  return (
    <div className="app ">
      <NavBar isTopOfPage={isTopOfPage} selected={selected} setSelected={setSelected}/>
      <div className='w-10/12 ml-10 md:w-5/6 mx-auto  h-full md:mb-10'>
      {
        isAboveSmallScreen && <DotGroup selected={selected} setSelected={setSelected}/>
      }
        <Home setSelected={setSelected}/> 
      </div>
      <Breaker className='hidden sm:flex my-5 md:mb-20'/>
      <div className='w-full  md:w-5/6 sm:mt-20 md:mx-auto md:h-full md:mt-100'>
        <MySkills/>
      </div>
      <Breaker className='md:mb-10'/>
      <div className='w-5/6 mx-auto md:h-full'>
        <Projects/>
      </div>
      <Breaker className='md:mb-20'/>
      <div className='w-5/6 mx-auto h-full md:mt-100 mt-32'>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
