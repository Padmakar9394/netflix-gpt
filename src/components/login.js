import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import { auth } from "../utils/firebase";

import Header from './Header';
import { checkValidData } from '../utils/validity';

import { BG_BANNER, USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);

    if(msg) return;

    if(!isSignInForm) {

      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!

          const {uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        }).catch((error) => {
          // An error occurred
          
          setErrorMsg(error.message);
        });

        // console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setErrorMsg(errorCode + ": " + errorMessage);
      });
    }
    else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode + ": " + errorMessage);
        setErrorMsg(errorCode + ": " + errorMessage);
      });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
          <img src={BG_BANNER} alt="bg-img" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-1/4 mx-auto my-36 bg-black rounded-lg p-8 right-0 left-0 text-white bg-opacity-90">
          <h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && 
            <input 
              ref={name}
              type='text' 
              placeholder='Enter your name' 
              className='px-4 py-3 my-2 w-full bg-gray-800' 
            />
          }
          <input 
              ref={email}
              type='email' 
              placeholder='xyz@gmail.com' 
              className='px-4 py-3 my-2 w-full bg-gray-800' 
          />
          <input 
              ref={password}
              type='password' 
              placeholder='password' 
              className='px-4 py-3 my-2 w-full bg-gray-800' 
          />
          <p className="text-red-600 font-bold text-lg py-2">{errorMsg}</p>
          <button className='px-4 py-3 bg-red-600 w-full my-8 rounded-lg' onClick={handleBtnClick}>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
          {isSignInForm && 
            <p className='py-4'>New to Netflix? <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>Signup</span> Now</p>}
          {!isSignInForm && 
            <p className='py-4'>Already have an account? <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>Signin</span> Now</p>}
        </form>
    </div>
  )
}

export default Login;