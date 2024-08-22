import React from 'react'
import useMovieDescription from "../hooks/useMovieDescription";
import MovieTeaser from './MovieTeaser';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MovieDescription = ({title, tagline, release_date, overview, genres, movieId}) => {

    useMovieDescription();
    console.log("MovieDescription props:", { title, tagline, release_date, overview, genres });
  
    const movies = useSelector( store => store.movies);
     if (!movies) return null;

    console.log(movies?.movieDescription?.id, "movie")
    const mainMovie = movies?.movieDescription;
    
    const {id } = mainMovie;
    console.log(id)

    const navigate = useNavigate();
    const handleHomePage = () =>{
      navigate("/browse");
    }
    
  return (
    <div>
        <MovieTeaser movieId= {movieId}/>
        <div className='bg-black  text-white'>
        <h1 className='font-bold text:xl md:text-4xl px-6 pt-6'> { title}</h1>
        <p className=' font-semibold text-lg px-7'>{tagline}</p>

        <h3 className='font-semibold text-lg md:text-2xl px-7 pt-6'>Release Date </h3>
        <p className='px-7 text-lg'> 
          {release_date}</p>

        <h3 className='font-semibold text-xl md:text-2xl px-7 pt-6'>Overview</h3>
        <p className='px-7 w-2/4 text-md md:text-lg'>
        {overview}</p>

        <h3 className='font-semibold text-xl md:text-2xl px-7 pt-6'>Geners</h3>
        <p className='px-7  text-lg'>
  {genres && genres.map((genre, index) => (
    <span key={index}>{genre} {index < genres.length - 1 ? ", " : ""}</span>
  ))}
</p>
<button className='md:py-2 md:px-4 mx-[250px] md:mx-[700px] my-6 md:my-2  bg-purple-600 text-white rounded-lg'
 onClick={handleHomePage}
> Go back to Home Page</button>
</div>
      
    </div>
  )
}

export default MovieDescription
