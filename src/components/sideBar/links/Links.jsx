import React from 'react'
import { motion } from 'framer-motion'


const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 100,
        opacity: 0
    }
}

const Links = () => {
    const links = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
    ]
    return (
        <motion.div className='links' variants={variants}>
            {links.map((link, index) => (
                <motion.a href={`#${link}`} key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 2 }}
                    whileTap={{
                        scale: 1,
                        transition: {
                            duration: 0.1
                        }
                    }}
                >{link}
                </motion.a>
            ))
            }
        </motion.div>
    )
}

export default Links
