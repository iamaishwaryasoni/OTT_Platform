import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upComing_movies = useSelector((store) => store.movies.upComingMovies);

    const getUpComingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
      
      dispatch(addUpComingMovies(json.results));
    };
  
    useEffect(() => {
        !upComing_movies && getUpComingMovies();
    },[])
}

export default useUpComingMovies;