import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toogleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {/* if it is not a isSignInForm then show */}
        {!isSignInForm && <input
          type="name"
          placeholder="Enter Full Name"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-80"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-80"
        />
        {!isSignInForm && <input
          type="number"
          placeholder="Enter 10 digit Phone Number"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-80"
        />}
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-80"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>{isSignInForm ? "New to Netflix? Sign UP Now" : "Already Register? Sign In Now ..."}</p>
      </form>
    </>
  );
};

export default Login;
