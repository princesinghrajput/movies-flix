import React, { useEffect } from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import ErrorPage from './pages/ErrorPage';

const Body = () => {
  const dispatch = useDispatch(); //always right dispatch on top
  const appRoute=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/error',
      element:<ErrorPage/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email: email, displayName:displayName, photoURL:photoURL}))
        // ...
      } else {
        // User is signed out
        dispatch(removeUser)
      }
    });
  }, [dispatch])
  return (
    <div>
      <RouterProvider router={appRoute}/>
      
    </div>
  )
}

export default Body