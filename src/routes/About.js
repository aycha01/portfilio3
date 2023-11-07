import React from 'react'
import Navbar from '../components/Navbar';
import Design from '../components/Design';
import AboutContent from '../components/AboutContent';



const About = () => {
  return (
    <div>
      <Navbar />
      <Design heading="ABOUT." text="Im a friendly Front-End Developer." />
     <AboutContent />
    
    </div>
  )
}

export default About