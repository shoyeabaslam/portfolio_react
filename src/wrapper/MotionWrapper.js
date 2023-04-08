import React from 'react';
import { easeIn, motion} from 'framer-motion';

const MotionWrapper = (Components) => function HOC() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.3,ease:easeIn}}
        
    >
        <Components/>
    </motion.div>
  )
}

export default MotionWrapper