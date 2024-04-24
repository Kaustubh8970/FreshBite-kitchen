import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function LoginSignup(){

    const[action,setAction] = useState("Login")

  return(
    <div class="mt-40 ml-80 flex flex-col items-center">
    <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
       {action}
    </h2>
    {action==="Login"?<div></div>:  <div class="mt-6">
        <input type="text" placeholder="Enter your name" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
    </div> }
   
    <div class="mt-4">
        <input type="email" placeholder="Email address" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
    </div>
    <div class="mt-4">
        <input type="password" placeholder="Password" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
    </div>
    {action==="Signup"?<div></div>:  <div>
<Link to={"/"} class="text-blue-500 hover:text-blue-700"><span>Forgot password?</span></Link>
    </div>}
   
    <div class="mt-6 flex justify-between w-full">
    <button onClick={()=>{setAction("Signup")}} class="{action==='Login'  : 'submit'} px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
        Sign up
    </button>
    <button onClick={()=>{setAction("Login")}} class="{action==='Signup' ? 'bg-grey' : 'submit'} px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
        Login
    </button>
</div>
</div>

  )
}