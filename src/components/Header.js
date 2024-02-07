import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import {  useDispatch } from'react-redux'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSignout =()=>{
    signOut(auth)
    .then(()=>{
    })
    .catch((error=>{
      navigate('/error')
    }))

  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email: email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse")
      
      } else {
        
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, [])


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>
      <div className='flex justify-between'>
      <img className='w-10 h-10' alt='user-icon' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
      <button onClick={handleSignout} className='mb-10 ml-2 bg-red-700 border-solid p-2 rounded-xl font-bold text-white'>Sign Out</button>
      </div>
    </div>
  
  )
}

export default Header

