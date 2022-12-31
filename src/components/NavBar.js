import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Link=({page,selected,setSelected})=>{
    const lowerCasePage =page.toLowerCase();
    console.log(lowerCasePage)
    return(
        <AnchorLink
            className={`${selected===lowerCasePage? "text-yellow":""} hover:text-yellow transition duration-500`}
            onClick={()=>setSelected(lowerCasePage)}
            href={`#${lowerCasePage}`}
        >
            {page}
        </AnchorLink>
    )
}

const NavBar = ({selected,setSelected,isTopOfPage}) => {
    const [isMenuToggled,setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width:768px)');
    const navColor = isTopOfPage? '':'bg-red'


  return (
    <nav className={`${navColor} z-40 w-full fixed top-0 py-4`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-3xl font-bold'>GQ</h4>
            {isAboveSmallScreen?
                (<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    
                    <Link page='Home' selected={selected} setSelected={setSelected}/>
                    <Link page='Skills' selected={selected} setSelected={setSelected}/>
                    <Link page='Projects' selected={selected} setSelected={setSelected}/>
                    <Link page='Contact' selected={selected} setSelected={setSelected}/>
                    
                </div>
            ):(
                
                    <div>
                        <IconButton  onClick = {() => setIsMenuToggled(!isMenuToggled)} 
                        sx ={{backgroundColor: '#EF5350',color: "white",border: 'none'}}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                        {
                            !isAboveSmallScreen && isMenuToggled && (
                                <div className = 'fixed right-0 bottom-0 h-full w-[300px] bg-sky-600 p-5 transition   delay-150 duration-500' >
                                    <IconButton  onClick = {() => setIsMenuToggled(!isMenuToggled)} 
                                    sx ={{backgroundColor: '#EF5350',color: "white",border: 'none', }}>
                                        <CloseOutlinedIcon/>
                                    </IconButton>
                                    <div className='flex mt-5 flex-col gap-10 ml-[33%] text-deep-blue text-2xl'>
                                        <Link page='Home' selected={selected} setSelected={setSelected}/>
                                        <Link page='Skills' selected={selected} setSelected={setSelected}/>
                                        <Link page='Projects' selected={selected} setSelected={setSelected}/>
                                        <Link page='Contact' selected={selected} setSelected={setSelected}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    
                    
                
                
            )}
        </div>

        
    </nav>
  )
}

export default NavBar