import React, { useState } from "react";
import Header from "./Header";


const Login = () => {
  const [isSignInForm, setisSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
    console.log("hello")
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
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />

         
          <input
            type="password"
            placeholder="Enter Your Passwords"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="py-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to MoviesFlix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
