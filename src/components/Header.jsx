import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
        navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser
          ({uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL}));
        
            navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
       
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
      // console.log(e.target.value);
  }

  return (
    <div className='absolute z-20 px-8 py-2 w-screen bg-gradient-to-b from-black flex flex-col md:flex-row justify-between'>
      <img src={LOGO}
       className='h-[75px] w-36  mx-auto md:mx-0'
       alt="logo" />

      { user && (
        <div className='flex p-2 justify-between'>
          { showGptSearch && (
          <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) =>(
              <option 
                key={lang.identifier} 
                value={lang.identifier} >
                  {lang.name}
              </option>
            ))}
          </select>
           )}
        <button className='py-2 px-4 mx-4 my-2  bg-purple-600 text-white rounded-lg'
        onClick={handleGptSearchClick}
        >
         {showGptSearch ? "Home Page" : "GPT Search"} 
        </button>
        <img src={USER_ICON} 
        alt="user icon"
        className='hidden md:block h-12 w-12' />
        <button className='mb-4 font-semibold text-white'
                onClick={handleSignOut}
        >(Sign Out)</button>
       </div>
)}
    </div>
  )
}

export default Header
