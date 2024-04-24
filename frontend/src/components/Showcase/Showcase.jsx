import React from 'react'
import Left from './left'
import Right from './right'


const Showcase = () => {
  return (
    <section className='mt-[85px] ml-[30px]  grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <Left />
      <Right />
    </section>
  )
}

export default Showcase;