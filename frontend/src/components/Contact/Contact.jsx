import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import { motion } from "framer-motion";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContactVisibility = () => {
    setShowContact(!showContact);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    className={`w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 left-0`}
  >
    <Header  showContact={showContact} toggleContactVisibility={toggleContactVisibility} />
      {showContact && <Contact/>}
      <Form/>
  </motion.div>
  );
};

export default Contact;
