import React from 'react'
import  './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
     
      <div className='footer__socials'>
        <a href='https://m.me/aysha.amri.1'target='__blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/'  target='__blank'><BsInstagram /></a>
        <a href='https://twitter.com/?lang=fr' target='__blank'><FiTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Aicha Amri.All rights reserves.</small>
      </div>
    </footer>
  )
}

export default Footer