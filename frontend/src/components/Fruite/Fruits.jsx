import React from 'react'
import Carousel from 'react-multi-carousel'

const data = [
    {
      image: "https://via.placeholder.com/600x400",
      alt: "Slide 1",
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      image: "https://via.placeholder.com/600x400",
      alt: "Slide 2",
      title: "Slide 2",
      description: "Description for slide 2",
    },
    {
      image: "https://via.placeholder.com/600x400",
      alt: "Slide 3",
      title: "Slide 3",
      description: "Description for slide 3",
    },
  ];
  

export default function Fruits() {
  return (
    <div className="container mx-auto">
    <CarouselSlider data={data} />
  </div>
  )
}
