import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import {  useDispatch } from'react-redux'
import { LOGO_URI, USER_AVATAR } from '../utils/constants'

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
      src={LOGO_URI} alt='netflix-logo'/>
      <div className='flex justify-between'>
      <img className='w-10 h-10' alt='user-icon' src={USER_AVATAR}/>
      <button onClick={handleSignout} className='mb-10 ml-2 bg-red-700 border-solid p-2 rounded-xl font-bold text-white'>Sign Out</button>
      </div>
    </div>
  
  )
}

export default Header

