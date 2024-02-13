import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg-img" />
        </div>
        <form className="absolute w-1/4 mx-auto my-36 bg-black rounded-lg p-8 right-0 left-0 text-white bg-opacity-90">
          <h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
          {isSignInForm && 
            <input type='text' placeholder='Enter your name' className='px-4 py-3 my-2 w-full bg-gray-800' />
          }
          <input type='email' placeholder='xyz@gmail.com' className='px-4 py-3 my-2 w-full bg-gray-800' />
          <input type='password' placeholder='password' className='px-4 py-3 my-2 w-full bg-gray-800' />
          <button className='px-4 py-3 bg-red-600 w-full my-8 rounded-lg'>{isSignInForm ? "Sign Up" : "Sign In"}</button>
          {!isSignInForm && 
            <p className='py-4'>New to Netflix? <span className="font-bold cursor-pointer" onClick={toggleSingInForm}>Signup</span> Now</p>}
          {isSignInForm && 
            <p className='py-4'>Already have an account? <span className="font-bold cursor-pointer" onClick={toggleSingInForm}>Signin</span> Now</p>}
        </form>
    </div>
  )
}

export default Login;