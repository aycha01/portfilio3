import React from 'react'
import Navbar from '../components/Navbar';
import Design from '../components/Design';
import FormContent from '../components/FormContent';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Design  heading ="CONTACT." text="Lets have a chat"/>
      <FormContent />
    
    </div>
  )
}

export default Contact