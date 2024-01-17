import React from "react";
import "../styles/buttonup.css";
const ButtonUp = () => {


    // you can use this function to scroll to the top of the page or you can use (anchor) tag to scroll to the top
    const scrollUp = ()=>{
        window.scrollTo ({
            top:0, 
            behavior:"smooth"
        })
    }
  return (
    <div>
        <a href="# ">
            <button className="btn btn-primary top">↑</button>
        </a>
    </div>
  );
};

export default ButtonUp;
