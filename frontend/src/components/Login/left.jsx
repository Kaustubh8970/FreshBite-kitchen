import React from 'react'
import { motion } from "framer-motion"
import LoginLogo from '../../img/chef1.png'
import { Link } from 'react-router-dom'


export default function Left() {
  return (
    
    <>
      <div className='max-w-96 mt-40 ml-20'>
      <motion.img
        whileHover={
          {
            rotate: [0, -10, 10, -10, 0],
            // duration: 0.5,
          }
        }
        src={LoginLogo}
        className="w-96 cursor-pointer"
        alt="logo-login"
      />
      </div>    
    </>
  )
}
