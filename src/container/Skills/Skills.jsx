import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';
import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  
  return (
    <div id='skills' className='skills-container'>
      <h1>Skills & Experiences</h1>
      <div className="app__skills-container">
      <motion.div className="app__skills-list"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: false }}
      >

          {skills.map((skill) => (
            <motion.div
              initial={{scale:0.8,opacity:1}}
              whileInView={{scale:1,opacity:1}}

              className="app__skills-item app__flex-skills"
              key={skill.name}
            >
              <div
                className="app__flex-skills"
              >                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
       </div>
    </div>
  )
}

export default Skills