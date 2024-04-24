import React from "react";
import { foodItems } from "../../utils/Data";
import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../Redux/cartSlice";

export default function Menu() {
  // Active button funtionallity

  const [activeButton, setActiveButton] = useState("all");

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  //filter gallery funtionality
  const filterItems =
    activeButton === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === activeButton);

  const style = {
    boxShadow: "-2px 6px 8px 3px rgba(0,0,0,0.1)",
    height: "6rem",
    width: "8%",
    borderRadius: "20%",
    padding: "1rem",
  };

  return (
    <section className="w-full ml-10   p-5  " id="menu">
      <div className="">
        {/* -------------Filter Tabs Button----------------- */}
        <h1 className="text-4xl text-center mb-8 mt-20 ">
          O<span className="border-b-4 border-orange-500 ">ur Hot Dish</span>es
        </h1>

        <div className="flex justify-center mb-16 gap-20 px-2 py-1">
          <button
            className={`${
              activeButton === "all" ? "active" : ""
            } hover:bg-red-600 hover:text-white `}
            onClick={() => handleFilterChange("all")}
            style={style}
          >
            Menu
          </button>
          <button
            className={`${
              activeButton === "Chicken" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Chicken")}
            style={style}
          >
            Chicken
          </button>
          <button
            className={`${
              activeButton === "Fruits" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Fruits")}
            style={style}
          >
            Fruits
          </button>
          <button
            className={`${
              activeButton === "Softdrinks" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Softdrinks")}
            style={style}
          >
            Soft Drinks
          </button>
          <button
            className={`${
              activeButton === "Fish" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Fish")}
            style={style}
          >
            Fish
          </button>
          <button
            className={`${
              activeButton === "Icecream" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Icecream")}
            style={style}
          >
            IceCream
          </button>
          <button
            className={`${
              activeButton === "Rice" ? "active" : ""
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleFilterChange("Rice")}
            style={style}
          >
            Rice
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-2 p-8 justify-between">
          {filterItems.map(({ id,name, price, description, image }, index) => {
            const dispatch = useDispatch();
            return (
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
                    alt={description}
                    src={image}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <p className="text-lg font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-base font-semibold text-headingColor">
                      <span className="text-sm text-red-600">₵</span> {price}
                    </p>
                    <button className="bg-red-600 text-white rounded-full p-3 cursor-pointer transition-transform transform hover:scale-125"
                    onClick={()=>dispatch(addtoCart({id,name,image,price}))}>
                      <MdOutlineAddShoppingCart />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
