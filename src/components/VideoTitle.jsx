import React from 'react';
import { PLAY_ICON } from '../utils/constants';


const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[1580px] aspect-video pt-40 px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-md w-1/4'> {overview} </p>

      <div className='my-4 md:m-0'>
        <button className='bg-white text-black py-1 md:py-4 px:3 md:px-12 text-xl font-semibold rounded-lg hover:bg-opacity-50'>
            <div className='flex'>
           <img 
           className='w-4 md:W-6 h-6 md:h-6 '
           src={PLAY_ICON}
           alt='Play Icon'/> 
           <p className='px-3 md:px-2'> Play</p>
           </div>
        </button>

        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            More Info
        </button>
    
      </div>
    </div>
  )
}

export default VideoTitle;
