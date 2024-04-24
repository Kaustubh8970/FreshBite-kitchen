import React from "react";
import { useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Checkout({ total, onClose }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Implement what happens when the form is submitted, e.g., sending data to a server
    console.log("Payment Details:", { name, cardNumber, expiryDate, cvv });
    alert(
      "Order completed successfuly with payment. Thank you for your patronage."
    );
    onClose(); // close the modal/form
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-1/3">
      <div className="flex items-center justify-between">
    <h2 className="font-bold text-2xl mb-6 text-gray-800">
        Secured Payment
    </h2>
    <button type="button" onClick={onClose} >
        <RxCross2 className="text-black text-bold w-6 h-6" />
    </button>
</div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="1234 5678 9012 3456"
              pattern="\d{16}"
              maxLength="16"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM/YY"
                pattern="\d{2}/\d{2}"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="123"
                pattern="\d{3}"
                maxLength="3"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <MdOutlineLock className="mr-2" />
            PAY ₵{total} NOW
          </button>
        </form>
      </div>
    </div>
  );
}
