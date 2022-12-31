import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({selected,setSelected}) => {
  return (
    <div className='fixed right-7 top-[45%] flex flex-col gap-2  ' >
        <AnchorLink 
            className={`${selected==='home'?'bg-yellow-400':'bg-grey'} h-3 w-3 rounded-full`}
            onClick={()=>setSelected('home')}
            href='#home'
        />
        <AnchorLink 
            className={`${selected==='skills'?'bg-yellow-400':'bg-slate-400'} h-3 w-3 rounded-full`}
            onClick={()=>setSelected('skills')}
            href='#skills'
        />
        <AnchorLink 
            className={`${selected==='projects'?'bg-yellow-400':'bg-slate-400'} h-3 w-3 rounded-full`}
            onClick={()=>setSelected('projects')}
            href='#projects'
        />
        <AnchorLink 
            className={`${selected==='contact'?'bg-yellow-400':'bg-slate-400'} h-3 w-3 rounded-full`}
            onClick={()=>setSelected('contact')}
            href='#contact'
        />
    </div>
  )
}

export default DotGroup