import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDescription } from "../utils/movieSlice";
import { useParams } from "react-router-dom";

const useMovieDescription = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();

    const getMovieDescription = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId  , API_OPTIONS)
        const json = await data.json()
        console.log(json);
        
        

        // const filterData = json.results.filter(video => video.type === "Trailer");
        // const trailer = filterData.length ? filterData[0] : json.results[0] ;
        dispatch(addMovieDescription(json));
    }

    useEffect(() => {
        if (movieId) {
            getMovieDescription();
        }
    }, [movieId, dispatch]);
}

export default useMovieDescription;