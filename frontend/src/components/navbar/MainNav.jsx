import React from 'react'
import Logo from '../../img/chef1.png'
import { Link } from "react-router-dom";
import Nav from './nav';
// import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";


export default function MainNav() {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <header className="w-screen bg-slate-50 bg-transparent fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={Logo} alt="Logo" className="md:w-6 lg:w-8 object-cover" />
        </motion.div>
        <p className="text-headingColor md:text-lg lg:text-xl font-bold">FreshBiteKitchen</p>
      </Link>
  
      {/* Hamburger Menu Icon */}
      <div className="flex md:hidden items-center">
        <button className="text-gray-500 focus:outline-none">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
  
      {/* Navigation */}
      <div className="flex justify-center md:justify-end">
        <Nav toggleContact={toggleContact} />
        {isContactOpen && <Contact onClose={toggleContact} />}
      </div>
    </div>
  </header>
  
  
  )
}
