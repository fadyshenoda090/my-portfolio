import { useState } from 'react'
import Links from './links/Links'
import './sideBar.scss'
import ToggleButton from './togglebutton/ToggleButton'
import { motion } from 'framer-motion'

const variants = {
    open: {
        clipPath: "circle(1250px at 50px 50px)",
        transition: {
            // delay: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 40
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            // delay: 0.5,
            type: 'spring',
            stiffness: 300,
            damping: 40
        }
    },
};

function SideBar() {
    const [open, setOpen] = useState(false)
    
    return (
        <motion.div className='sideBar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default SideBar
