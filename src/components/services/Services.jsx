import React, { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -1000,
        //   y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        //   y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div className='services'
            variants={variants}
            ref={ref}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            animate={isInView ? "animate" : "initial"}
        >
            <motion.div className="textContainer">
                <p>
                    I Focus on building high quality and responsive websites <br /> and applications.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <h>Unique</h> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <h>For Your</h> Business.
                    </h1>
                    <button>What I do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants} initial="initial" animate="animate">
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black", }}>
                    <h2>User friendly designes</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus fugit atque minima doloribus et repellendus sunt inventore eveniet amet.
                        Animi, voluptates delectus.
                        Suscipit quisquam vel rerum quos sapiente unde mollitia!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black", }}>
                    <h2>User friendly designes</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus fugit atque minima doloribus et repellendus sunt inventore eveniet amet.
                        Animi, voluptates delectus.
                        Suscipit quisquam vel rerum quos sapiente unde mollitia!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black", }}>
                    <h2>User friendly designes</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus fugit atque minima doloribus et repellendus sunt inventore eveniet amet.
                        Animi, voluptates delectus.
                        Suscipit quisquam vel rerum quos sapiente unde mollitia!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black", }}>
                    <h2>User friendly designes</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus fugit atque minima doloribus et repellendus sunt inventore eveniet amet.
                        Animi, voluptates delectus.
                        Suscipit quisquam vel rerum quos sapiente unde mollitia!
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
