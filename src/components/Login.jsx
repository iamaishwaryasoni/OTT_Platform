import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGRAOUND_IMG } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth;
          dispatch(addUser
            ({uid: uid,
              email: email, 
              displayName: displayName, 
              photoURL: photoURL}));
          navigate("/browse");
          // ...
        }).catch((error) => {
          setErrorMessage(error.message);
          // ...
        });
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    }  else {

  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
  }

  const toggleSignIpForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div className=''>
      <Header />
      <div className='absolute w-full'>
      <img src={BACKGRAOUND_IMG} 
      className='h-screen object-cover md:w-full'
      alt="bg" />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='absolute p-12 text-white bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {
            !isSignInForm &&(
              <input 
              ref={name}
              type="text" 
              placeholder='Full Name' 
              className='p-4 my-4 w-full rounded-md bg-gray-700' />
            )
          }
        <input 
        ref={email}
        type="text"
        placeholder='Email Address' 
        className='p-4 my-4 w-full rounded-md bg-gray-700' />

        <input
        ref={password} 
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full rounded-md bg-gray-700' />

        <p className='font-bold text-red-500 text-md pt-3'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=' py-6 flex items-center justify-center  cursor-pointer' onClick={toggleSignIpForm}>
        {isSignInForm ? "New to Gett TV? Sing Up" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
