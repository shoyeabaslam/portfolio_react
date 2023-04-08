import { React, useState, useEffect } from 'react'
import './About.scss'
import { HiDownload } from 'react-icons/hi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import {  motion } from 'framer-motion';

import { client } from '../../client';
import { MotionWrapper } from '../../wrapper';
import { images } from '../../constants/index';
const About = () => {
  const [myFileUrl, setMyFileUrl] = useState('');


  useEffect(() => {
    const query = '*[_type == "resume"][0]';
    client.fetch(query).then((data) => {
      const assetId = data?.myFile?.asset?._ref;
      if (assetId) {
        const query = `*[_id == "${assetId}"]{url}[0]`;
        client.fetch(query).then((result) => {
          const url = result?.url;
          setMyFileUrl(url);
        });
      }
    });
  }, []);



  return (
    <div id='about' className='about-container'>
      <h1>About-Me</h1>
      <div className='about-wrapper-class'>
        <div className="about-content">
          <div>
            <h3>I'm <span style={{ color: '#EC2657' }}>Abdul Shoyeab Aslam,</span></h3>
            <p>As a computer science engineering student, I am passionate about web development and android applications. I have completed successful projects, including responsive websites and user-friendly mobile apps, demonstrating my technical skills. I am proficient in programming languages like Java, Python and C. And have experience working with databases, APIs, and web frameworks. I am a great communicator and team player.</p>
          </div>
          <ul>
            <li>What sets me apart from other candidates is my ability to work under pressure while remaining focused and calm. I believe that challenges provide an opportunity for growth, and I am always eager to learn and improve my skills. As a quick learner, I am confident in my ability to adapt to new technologies and approaches.</li>
            <li>Throughout my academic career, I have honed my skills in web development using HTML, CSS, JavaScript, and JavaScript Frameworks. I have also gained experience in creating innovative and user-friendly android applications.</li>
            <li>
              As a disciplined and punctual person, I understand the importance of meeting deadlines and respecting the time of others. I am committed to producing high-quality work that is clear, structured, and meets the requirements.
            </li>
            <li>If given the opportunity, I am eager to bring my experience and skills to your team. As an enthusiastic and motivated individual, I am excited to contribute to your company's success and to learn from experienced professionals. I am confident that I will be a valuable addition to your team and I look forward to the possibility of joining your company..</li>
          </ul>
          <div className='about-section-buttons'>
            <button ><a href={myFileUrl} target='_blank' rel="noreferrer" >Resume <HiDownload /></a></button>
            <button ><a href="#work">Check Out Portfolio <AiOutlineArrowUp /></a></button>
          </div>
        </div>
        <div className="about-img">
          <div>
            <div className='blob'>
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="106.734 195.698 715.731 689.842"><defs><linearGradient id="b" gradientTransform="rotate(225 .5 .5)"><stop offset="0%" stopColor="#EC2657" /><stop offset="100%" stopColor="#ffc66f" /></linearGradient><clipPath id="a"><path fill="currentColor" d="M797.5 704.5Q736 909 515 882.5T166.5 678Q39 500 183.5 351.5t320-155.5Q679 189 769 344.5t28.5 360Z" /></clipPath></defs><g clipPath="url(#a)">
                <path fill="url(#b)" d="M797.5 704.5Q736 909 515 882.5T166.5 678Q39 500 183.5 351.5t320-155.5Q679 189 769 344.5t28.5 360Z">
                  <animate attributeName="d" dur="4s" repeatCount="indefinite"
                    values="M797.5 704.5Q736 909 515 882.5T166.5 678Q39 500 183.5 351.5t320-155.5Q679 189 769 344.5t28.5 360Z;
               M856 712.5Q745 925 525 881T223 668.5q-82-168.5-2.5-342T484 181q184 28 333.5 173.5t38.5 358Z;
               M828 666.5Q692 833 490.5 849T158 682.5q-131-182.5 3-360T488.5 165Q682 185 823 342.5t5 324Z;
               
               M797.5 704.5Q736 909 515 882.5T166.5 678Q39 500 183.5 351.5t320-155.5Q679 189 769 344.5t28.5 360Z;
               
               " />
                </path>


              </g></svg>
              <img src={images.profile} alt='profile' />
              <motion.div className='ui-ux-designer-floating-card'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2}}
              >
                <p>UI/UX Designer</p>
              </motion.div>
              <motion.div className='web-developer-floating-card'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2 }}

              ><p>Web Developer</p></motion.div>
              <motion.div className='android-developer-floating-card'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              ><p>Andriod Developer</p></motion.div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default MotionWrapper(About);