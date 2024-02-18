import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='w-full flex justify-between absolute py-2 px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-48' src={NETFLIX_LOGO} alt="logo" />
      { user &&   
        <div className='flex items-center gap-3'>
         { showGptSearch &&
            <select className="px-3 py-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            { 
            
              SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            
            }
          </select>}
          <button onClick={handleGPTSearchClick} 
                  className="bg-purple-800 text-white py-2 px-4 text-xl rounded-lg">
                    {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className='w-12 rounded-md' src={user?.photoURL} alt="user-icon" />
          <button onClick={handleSignOut} className='bg-red-600 text-white p-2 text-xl rounded-lg'>
            Sign out
          </button>
      </div>
      }
    </div>
  )
}

export default Header;