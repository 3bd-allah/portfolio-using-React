import React, { useState , useEffect } from 'react'
import ButtonUp from './ButtonUp'



const ScrollUpButton = () => {
  
  const [scrollToTop, setScrollToTop] = useState(false)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 150){
        setScrollToTop(true)
      }else{
        setScrollToTop(false)
      }
    })
  },[])


    return (
    <div>
      {scrollToTop && (<ButtonUp/>)}
    </div>
  )
}

export default ScrollUpButton