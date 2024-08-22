import React from 'react'
import useMovieTeaser from '../hooks/useMovieTeaser';
import { useSelector } from 'react-redux';

const MovieTeaser = ({movieId}) => {

    const teaserVideo = useSelector(store => store.movies?.teaserVideo)
    console.log(teaserVideo)
      console.log(movieId)
    useMovieTeaser(movieId);

  return (
    <div>
      <iframe 
      className='w-full md:w-full aspect-video'
      src={"https://www.youtube.com/embed/" + teaserVideo?.key + "?&autoplay=1&mute=1"}

      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </div>
  )
}

export default MovieTeaser
