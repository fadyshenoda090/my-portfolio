import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss';

const Parallax = ({ type }) => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const textTransform = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const bgTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className='parallax' ref={containerRef} style={{
            background: type === "services"
                ? "linear-gradient(180deg, #111132, #0c0c1d)"
                : "linear-gradient(180deg, #111132, #505064)",
        }}>
            <motion.h1 style={{ y: textTransform }}>
                {type === "services" ? "What I do" : "What I did"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"
            style={{y: bgTransform, backgroundImage:`url(${type=== 'services'? '/planets.png': "/sun.png"})`}}
            ></motion.div>
            <motion.div style={{ x: bgTransform }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;