import { Link } from "react-router-dom"
import "./aboutcontent.css"
import React from 'react'
import ayyyy from "../assets/ayyyy.jpg"
import pic  from "../assets/pic.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I </h1>
            <p>Im a react font-end developer. 
                I create responsive secure Websites for my clients.</p>
               <Link to="/contact">
                <button className="btn">Contact</button>
               </Link>
      
        </div>



<div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={ayyyy} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom">
            <img src={pic} className="img" alt="true"/>
        </div>
    </div>
</div>

    </div>
  )
}

export default AboutContent