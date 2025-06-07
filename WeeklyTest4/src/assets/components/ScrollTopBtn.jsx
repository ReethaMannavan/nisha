import { useState, useEffect } from "react";

const ScrollTopBtn = () => {

const[visible,setVisible]=useState(false);

useEffect(()=>{
    const handleScroll =()=>{
        setVisible(window.scrollY > 300)

    };

    window.addEventListener('scroll', handleScroll);

    return()=>window.removeEventListener('scroll', handleScroll);


},[])

const scrolltoTop =()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })
};

 return (
    visible && (
      <button className="scroll-to-top" onClick={scrolltoTop}>
        ↑ Top
      </button>
    )
  );

};

export default ScrollTopBtn;
