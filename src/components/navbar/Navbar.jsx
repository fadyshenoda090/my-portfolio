import SideBar from '../sideBar/SideBar'
import './navbar.scss'
import { motion } from 'framer-motion'
const Navbar = () => {
    return (
        <div className='navbar'>
            <SideBar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0}} 
                animate={{opacity:1, scale:1}}
                transition={{delay:0.2, duration:0.5}}
                >sayo7a dev</motion.span>
                <div className="social">
                    <a href="#">
                        <img src="/facebook.png" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="/instagram.png" alt="instagram" />
                    </a>
                    <a href="#">
                        <img src="/ilinkedin.png" alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src="/github.png" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
