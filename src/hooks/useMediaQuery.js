import React,{useState,useeffect, useEffect} from 'react';


const useMediaQuery=(query)=>{
    const [matches,setMatches] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);
        
        if(media.matches !== matches){
            setMatches(media.matches)
        }
        const listner = () => {

            setMatches(media.matches)
        }
        window.addEventListener('resize',listner)
        return ()=>window.removeEventListener('resize',listner)
    },[query,matches])
    return matches;
}

export default useMediaQuery;