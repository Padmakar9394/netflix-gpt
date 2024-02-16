import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

import Login from './login';
import Browse from './Browse';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Error from './Error';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    }, 
    {
      path: "/browse",
      element: <Browse />,
    }, 
    {
      path: "error",
      element: <Error />
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;