import React, { Component } from 'react'
import "./design.css"

class  Design extends Component  {
  render (){
    return(
    
  
    <div className='design'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>
    </div>
  );
    }
}

export default Design