import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-6 '>
        <h1 className='text-lg md:text-3xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
            { movies && movies.map((movie) => (
              <Link 
              key={movie.id}
              to={"/movieDescription/" + movie.id}>
                 <MovieCard  posterPath={movie.poster_path}/> 
                 </Link>
            ))}    
        </div>
        </div>
    </div>
  )
}

export default MovieList
