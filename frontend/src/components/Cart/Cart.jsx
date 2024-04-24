import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../../Redux/cartSlice";
import Empty from "../../img/emptyCart.svg";
import Checkout from "./Checkout";
import axios from "axios";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const deliveryCharge = subtotal < 100 ? 100 : 0;
  const total = subtotal + deliveryCharge;

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleCheckoutClose = () => {
    setIsModalOpen(false);
  };

   // Fetch cart items from the backend when the component mounts
   useEffect(() => {
    axios.get("http://localhost:5000/cartItems")
      .then(response => {
        setCartItems(response.data);
        calculateTotal(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []); // Empty dependency array to run only once on mount

  const calculateTotal = (items) => {
    const subtotal = items.reduce((acc, item) => acc + item.price, 0);
    const deliveryCharge = subtotal < 100 ? 100 : 0;
    const total = subtotal + deliveryCharge;
    setSubtotal(subtotal);
    setDeliveryCharge(deliveryCharge);
    setTotal(total);
  };


  if (cartItems.length === 0) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="text-center">
          <img src={Empty} className="mx-auto h-80 mt-40" alt="Empty" />
          <h2 className="mt-4 text-2xl font-semibold mb-5">Cart is empty</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="w-50 ml-10 p-5 bg-grey" id="menu">
      <div className="mt-20">
        <h1 className="text-4xl text-center mb-4">
          <span className="border-b-4 border-orange-500">Cart</span>
        </h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <img className="w-16 h-16 mr-4" src={item.image} alt={item.name} />
            <div className="flex-grow">
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-600">₵{item.price}</p>
            </div>
            <button onClick={() => dispatch(removefromCart({ id: item.id }))}>
              Remove
            </button>
          </div>
        ))}

        <div className="gap-5">
          <div className="flex items-center justify-end">
            <p className="text-gray-400">Sub Total - &nbsp;</p>
            <p className="text-gray-400">
              <span className="text-red-600">₵</span> {subtotal}
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-gray-400">Delivery - &nbsp;</p>
            <p className="text-gray-400">
              <span className="text-red-600">₵</span> {deliveryCharge}
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-black">Total - &nbsp;</p>
            <p className="text-black">
              <span className="text-red-600">₵</span> {total}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={toggleModal}
            className="w-1/6 p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
          >
            Checkout
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Checkout total={total} onClose={handleCheckoutClose} />
      )}
    </section>
  );
}
