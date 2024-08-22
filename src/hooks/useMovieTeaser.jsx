import { useDispatch, useSelector } from "react-redux";
import { addTeaserVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTeaser = (movieId) => {
    const dispatch = useDispatch();

    console.log(movieId)

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'
             + movieId +'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        console.log(json, "Movie teaser");
        

        const filterData = json.results.filter(video => video.type === "Teaser");
        const teaser = filterData.length ? filterData[0] : json.results[0] ;

        dispatch(addTeaserVideo(teaser));
    }

    useEffect(() => {
       !trailerVideo && getMovieVideos();
    }, []);
}

export default useMovieTeaser;

