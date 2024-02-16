import React from 'react'
import { signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='w-full flex justify-between absolute py-2 px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      { user &&   
        <div className='flex items-center'>
        <img className='w-12 mx-2 rounded-md' src={user?.photoURL} alt="user-icon" />
        <button onClick={handleSignOut} className='bg-red-600 text-white p-2 text-xl rounded-lg'>Sign out</button>
      </div>
      }
    </div>
  )
}

export default Header;