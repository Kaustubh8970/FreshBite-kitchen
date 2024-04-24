import React from 'react'
import HeroBg from '../../img/hero-bg.png'
import { data } from '../../utils/Data'
import StaticsImages from './Statics'

const Right = () => {
  return (
 
  <div className="py-2 flex-1 mr-10 flex items-center relative">
      <img src={HeroBg} alt="" className='ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto' />
      <StaticsImages items = {data} />
    </div>
   
  )
}

export default Right