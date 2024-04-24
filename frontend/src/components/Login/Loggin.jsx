import React from 'react'
import Left from './left'
import LogginPage from './LoginSignup'

export default function Loggin() {
  return (
    <div className='flex  bg-gray-100'>
      <Left/>
      <LogginPage/>
    </div>
  )
}
