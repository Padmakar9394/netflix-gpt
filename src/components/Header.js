import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  useEffect(() => {
    //Read documentation
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({ 
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL 
        }));

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error");
    }
    );
  }

  return (
    <div className='w-full flex justify-between absolute py-2 px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-48' src={NETFLIX_LOGO} alt="logo" />
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