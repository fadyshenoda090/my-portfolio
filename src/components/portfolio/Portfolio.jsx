import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Amazon Clone",
        image: "amazoncloneHome.png",
        description: `This is a clone of Amazon website. It has all the features 
        of Amazon website. It has a login page, home page, checkout page, 
        payment page, order page, and a product page. 
        It is built using React, Redux, React hook form, Material UI, Firebase, tailwindcss,  and PayPal.`
    },
    {
        id: 2,
        title: "Admin Dashboard",
        image: "adminDashboard.png",
        description: `This is a samplw of Amazon admin dashboard, It is built using Angular,
        Angular Material, and Firebase.`
    },
    {
        id: 3,
        title: "Movies Land",
        image: "moviesLand.png",
        description: `This is a sample of a movie website, It is built using React, Redux,
        Context, Axios, the MDB api, Bootstrap, MDB React UI kit and Redux tool kit.`
    }
]

const SingleItem = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 150]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.image} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 30,
        })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map((item) => (
                <SingleItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
