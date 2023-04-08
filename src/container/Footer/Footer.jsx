import React from 'react'
import {images} from '../../constants/index'
import './Footer.scss'
const Footer = () => {
  const backToHome = ()=>{
    window.location.href = '#home';
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={images.footer_icon} alt='icon' onClick={backToHome} />
        <div/>
        <p>Copyright © 2023 ShoyeabAslam</p>
      </div>
    </footer>
  )
}

export default Footer