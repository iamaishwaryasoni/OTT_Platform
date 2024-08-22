import React from 'react'
import MovieDescription from './MovieDescription'
import { useSelector } from 'react-redux';
import useMovieDescription from '../hooks/useMovieDescription';
import { useParams, useRoutes } from 'react-router-dom';


const MainMovieDescription = () => {
  const router = useParams()

  console.log(router.movieId)
   
    useMovieDescription();

    const description = useSelector ((store) => store.movies?.movieDescription);
    if (!description) return null;

    
    console.log("Redux store movie description:", description);
    
    const {original_title, overview, id, tagline, release_date, genres } = description;
    console.log(original_title, overview, id, tagline, release_date, genres)
  return (
    <div>
      {
        description &&  <MovieDescription title={original_title}  overview={overview} movieId={router.movieId} tagline={tagline} release_date= {release_date} genres= {genres.map(genre => genre.name)} />
      }
    </div>
  )
}

export default MainMovieDescription;
