import React from 'react';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function Review(props) {
    const { author, date, content , rating } = props;

    return (
        <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{author}</h3>
        <div className="flex items-center">
          <span className="flex text-yellow-500 text-xl ">{rating}</span>
        </div>
        <p className="text-gray-500">{date}</p>
        <p className="mt-2">{content}</p>
      </div>
      
    );
}

function Reviews() {
    return (
        <div className="container mx-auto">
        <h1 className="text-4xl text-center mb-8 mt-20">
          <span className="border-b-4 border-orange-500">What Our Cust</span>omers Say
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Review
  author="Michael Johnson"
  rating={[<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />]}
  date="March 20, 2024"
  content="Our dining experience at the restaurant was fantastic! The ambiance was delightful, and the food was exquisite. The staff was attentive and friendly. We highly recommend this restaurant to everyone!"
/>
<Review
  author="Sarah Brown"
  rating={[<IoMdStar />, <IoMdStar />, <IoMdStarHalf />]}
  date="April 5, 2024"
  content="I had a wonderful time dining at this restaurant. The dishes were beautifully presented and tasted amazing. The service was impeccable, and the atmosphere was cozy. Can't wait to come back!"
/>
<Review
  author="Jessica Miller"
  rating={[<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />]}
  date="April 10, 2024"
  content="My friends and I had an unforgettable evening at this restaurant. The food was top-notch, and the cocktails were delicious. The staff went above and beyond to make our experience memorable. We'll definitely be returning!"
/>
<Review
  author="David Wilson"
  rating={[<IoMdStar />, <IoMdStar />,<IoMdStar />]}
  date="April 15, 2024"
  content="I recently visited this restaurant for a special occasion, and it exceeded all my expectations. The menu selection was impressive, and the service was exceptional. I highly recommend trying their signature dishes!"
/>
<Review
  author="Emily Clark"
  rating={[<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />]}
  date="April 20, 2024"
  content="I celebrated my birthday at this restaurant, and it was a memorable experience. The staff surprised me with a special dessert, and the overall service was outstanding. I can't wait to return for another celebration!"
/>

        </div>
      </div>
      
    );
}

export default Reviews;

