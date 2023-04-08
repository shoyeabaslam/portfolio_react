import React from 'react'
import './Header.scss'
import TypeWriterEffect from 'react-typewriter-effect';
import {images} from '../../constants/index';

function TypeWriterFuntion(props){
  return (
      <h3 style={{color:'black'}}>{props.prefix} <TypeWriterEffect
        textStyle={{
          color: '#006f51',
          fontSize: '1em',
        }}
        startDelay={500}
        cursorColor="#006f51"
        multiText={[
          'an Android Developer.','a Web Developer.' ,'a UI/UX Designer.'
        ]}
        multiTextDelay={2000}
        typeSpeed={30}
        multiTextLoop = {true}
      />
      </h3>
  );
}
const Header = () => {

  return (
    <div id='home' className='header-container'>
      <div className="header-content">
        <h2>Hi ! I am</h2>
        <h1>Shoyeab Aslam</h1>
        <div className="typing-animation">
        <TypeWriterFuntion prefix="I am"/>
        </div>
      </div>
      <div className='description'><p>Combining strong technical skills with creative design abilities to develop smooth and seamless solutions for web, Android, and user interface/user experience (UI/UX) design. Passionate about using technology to make a positive impact in the digital world.</p></div>
      <div className="header-link-icon">
        <div>
            <a href='https://github.com/shoyeabaslam' target='_blank' rel="noreferrer"><img src={images.github} alt='github'/></a>
        </div>
        <div>
            <a href='https://www.linkedin.com/in/shoyeab/' target='_blank' rel="noreferrer"><img src={images.linkedin} alt='linkedin'/></a>
        </div>
        <div>
            <a href='#contact'><img src={images.mail} alt='main'/></a>
        </div>
        <div>
            <a href='https://wa.me/+918309644110' target='_blank' rel="noreferrer"><img src={images.contact} alt='contact'/></a>
        </div>
      </div>
    </div>
  )
}

export default Header