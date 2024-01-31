import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm]=useState(true);
  const [erroMessage,seterrorMessage]= useState(null)
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }

  const handleButtonClick =()=>{

    
    //validate the form data
    const message= checkValidData(email.current.value,password.current.value);
    seterrorMessage(message)
    if(message) return;


    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("Signed Up")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    seterrorMessage(errorCode+ "-" + errorMessage)
  });


    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" + errorMessage)
  });

    }

  
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <div>
        
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">


          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />}
        
          <input
          ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />

         
          <input
          ref={password}
            type="password"
            placeholder="Enter Your Passwords"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-xl">{erroMessage}</p>
          <button className="py-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to MoviesFlix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login; 