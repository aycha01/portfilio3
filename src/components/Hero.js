import "./hero.css"
import React from 'react'
import aaa from "../assets/aaa.jpg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
       <div className="mask">
        <img className="into-img" src= {aaa} alt="im1"  />
        </div> 
        <div className="content">
            <p>HI, I'M A DEVELOPER FULSTACK</p>
            <h1>React Developper</h1>
            <div> 
                <Link to="/contact" className="btn">Contact</Link>

            </div>

     </div>
    </div>
  )
}

export default Hero