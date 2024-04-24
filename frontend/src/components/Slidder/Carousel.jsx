import React from 'react'
import Carousel from 'react-multi-carousel';
import { motion } from "framer-motion";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import "react-multi-carousel/lib/styles.css";
import { foodItems } from '../../utils/Data';
 

export default function Carouse() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024},
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4 
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }};

       const product=  foodItems.map((item, index) => (
        <>
        <motion.div
              key={index}
              whileTap={{ rotate: [0, -1, 1, -1, 0] }}
              className="bg-orange-50 gap-4 rounded-lg shadow-md p-8 w-[300px] md:w-[350px] mb-4"
            >
              <div className="flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  className="w-40 h-40 md:w-48 md:h-48 object-contain cursor-pointer"
                  alt={item.description}
                  src={item.image}
                />
              </div>
              <div className="flex flex-col mt-4">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-base font-semibold text-headingColor">
                    <span className="text-sm text-red-600">₵</span> {item.price}
                  </p>
                  <button className="bg-red-600 text-white rounded-full p-3 cursor-pointer transition-transform transform hover:scale-125">
                    <MdOutlineAddShoppingCart />
                  </button>
                </div>
              </div>
            </motion.div>
            
        </>
       )) 
  return (
    <div>
        <Carousel responsive={responsive}>
        {product}
        </Carousel>

    </div>
  )
}
