import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGRAOUND_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed w-full -z-10'>
      <img src={BACKGRAOUND_IMG} 
      className='h-screen object-cover md:w-full'
      alt="bg" />
      </div>

      <div className=''> 
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
    
  )
}

export default GptSearch
