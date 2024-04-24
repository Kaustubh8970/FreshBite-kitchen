import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import MainNav from "./MainNav";
import React, { useState } from "react"; // Import useState
import { CiLogin } from "react-icons/ci";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

function Nav({ direction }) {
  const cartItems = useSelector((state) => state.cart.cart);

  const [isToggled, setIsToggled] = useState(false);

  const handleContactClick = () => {
    setIsToggled(!isToggled);
    // Add any other functionality you want to happen when the contact is clicked
  };

  return (
    <div className="text-center">
    <div className="flex items-center gap-8 flex-wrap justify-center md:justify-between">
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`flex items-center gap-8 ${direction && direction}`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/"}>Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/menu"}>Menu</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/aboutus"}>About us</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          onClick={handleContactClick}
        >
          <span>Contact us</span>
        </motion.li>
      </motion.ul>
  
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center text-textColor"
      >
        <Link to={"/cart"}>
          <MdShoppingBasket className="text-2xl cursor-pointer" />
        </Link>
        {cartItems && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
            <p className="text-sm text-white font-semibold">{cartItems.length}</p>
          </div>
        )}
      </motion.div>
  
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center text-textColor border border-gray-300 rounded-lg p-2"
      >
        <Link to={"/loggin"}>
          <button className="flex cursor-pointer items-center gap-2">
            <CiLogin className="text-2xl flex" />
            Login
          </button>
        </Link>
      </motion.div>
    </div>
    {isToggled && <Contact onClose={handleContactClick} />}
  </div>
  
  );
}

export default Nav;
