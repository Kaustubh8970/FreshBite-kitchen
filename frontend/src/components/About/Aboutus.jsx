import React from "react";
import Review from "../About/Review";

export default function Aboutus() {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-4xl text-center mb-8 mt-20 ">
          <span className="border-b-4 border-orange-500 ">About</span>&nbsp;us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50fGVufDB8fDB8fHww"
              alt="Restaurant"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:col-span-1">
            <h1 className="text-xl font-semibold mb-4"> Our Story</h1>
            <p className="text-gray-700 text-justify">
              Welcome to FreshBite Kitchen, where culinary excellence meets
              impeccable ambiance in the heart of Nagpur. Nestled in the vibrant
              cityscape, FreshBite Kitchen invites you on a gastronomic journey
              like no other. Step into our inviting space and be greeted by a
              warm, contemporary atmosphere designed to elevate your dining
              experience. With modern décor, soft lighting, and comfortable
              seating, every corner of FreshBite Kitchen exudes an air of
              sophistication and relaxation.
            </p>

            <p className="text-gray-700 mt-4 text-justify">
              Our menu boasts an array of delectable dishes crafted from the
              freshest ingredients sourced locally and globally. From
              tantalizing appetizers to mouthwatering mains and indulgent
              desserts, our culinary team ensures each dish is a symphony of
              flavors and textures that will tantalize your taste buds. Whether
              you're craving a hearty Indian meal, savoring international
              flavors, or exploring vegetarian and vegan options, FreshBite
              Kitchen has something to please every palate. Pair your meal with
              our curated selection of fine wines, artisanal cocktails, or
              refreshing beverages for a complete dining experience.
            </p>
          </div>

          <div className="md:col-span-1">
            <p className="text-gray-700 text-justify">
              At FreshBite Kitchen, we believe in providing exceptional service
              to complement our outstanding cuisine. Our attentive and
              knowledgeable staff are dedicated to ensuring your dining
              experience exceeds expectations, from the moment you enter until
              the last bite. 
              enjoying a casual meal with friends, or hosting a corporate event,
              our team is here to cater to your every need with professionalism
              and a genuine smile. Join us at FreshBite Kitchen and embark on a
              culinary journey that will leave you craving for more.
            </p>

            <p className="text-gray-700 mt-4 text-justify">
              Indulge in our chef's special tasting menu for a truly
              unforgettable experience, where each course is thoughtfully
              curated to delight and surprise your palate. Or, if you prefer to
              customize your dining adventure, our à la carte menu offers a
              diverse selection of dishes to suit every preference and dietary
              requirement. Experience the harmony of flavors, the artistry of
              presentation, Nagpur, we welcome you to join us and discover why we're renowned
              as one of the city's premier dining destinations. Make your
              reservation today and let us take you on a culinary voyage that
              will leave a lasting impression.
            </p>
          </div>
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyfGVufDB8fDB8fHww" alt="Restaurant"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}
