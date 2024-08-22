import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className=' bg-black'>
      
      <div className='mt-0 md:-mt-72 pl-4 md:pl-11 pr-4 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies}/>

      </div>
    </div>
  )
}

export default SecondaryContainer
