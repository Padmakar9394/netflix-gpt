import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);


    useEffect(() => {
        if(!topRatedMovies)
            getTopRatedMovies();
    }, []);

    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addTopRatedMovies(data?.results));
        // console.log(data);
    }
}

export default useTopRatedMovies;