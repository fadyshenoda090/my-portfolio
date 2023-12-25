import React from 'react'
import './parallax.scss'

const Parallax = ({type}) => {
  return (
    <div className='parallax'>
      <h1>{type==="services" ? "What I do" : "Projects Made"}</h1>
    </div>
  )
}

export default Parallax
