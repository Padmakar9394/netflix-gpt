import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';


const useMovieTrailer = (movieID) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useEffect(() => {
        if(!trailerVideo)
            getMovieVideos();
    }, []);

    const getMovieVideos = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + 
        movieID + "/videos?", API_OPTIONS);
        const data = await response.json();
        

        const filterTrailer = data.results.filter(video => video.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }
}

export default useMovieTrailer;