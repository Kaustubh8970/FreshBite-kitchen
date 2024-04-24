import React from "react";
import BikeDelivery from "../../img/delivery.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="py-2 flex-1 ml-8 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The Fastest Food Delivery in
        <span className="text-orange-600 text-[2.5rem] lg:text-[4.6rem]">
          {" "}
          Nagpur
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Welcome to  FreshBiteKitchen, where culinary delights meet
        convenience! Indulge in a diverse array of flavors from the comfort of
        your own home. Our expertly crafted dishes are prepared with the finest
        ingredients and delivered promptly to your doorstep. Experience culinary
        excellence with every bite!
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      ><Link to={'/menu'} > Order Now </Link>
       
      </motion.button>
    </div>
  );
};

export default Left;
