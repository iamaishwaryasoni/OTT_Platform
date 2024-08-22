import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className='w-40 md:w-56  pr-4'>
      <img
      
      src={IMG_CDN_URL + posterPath} 
      alt="movie poster" />
    </div>
  )
}

export default MovieCard
