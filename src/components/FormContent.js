import React from 'react'
import "./styleform.css"
const FormContent = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="type your message here" />
            <button className='btn'>Send</button>
        </form>

    </div>
  )
}

export default FormContent