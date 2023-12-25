import React from 'react'
import { motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
    initial: {
        x:-500,
        opacity:0
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration:1,
            stagerChildren:0.5
        }
    },
    scrollButton:{
        opacity:0.5,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    },
}
const SliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x:"-220%",
        transition: {
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Fady Shenoda</motion.h2>
          <motion.h1 variants={textVariants}>Front-End Developer</motion.h1>
          <motion.h1 variants={textVariants}> using React</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Get in Touch</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVariants} animate={"scrollButton"} />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
        Hi There I am Fady a Front-End Developer Using React
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
