import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);


    useEffect(() => {
        if(!upcomingMovies)
            getUpcomingMovies();
    }, []);

    const getUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addUpcomingMovies(data?.results));
        // console.log(data);
    }
}

export default useUpcomingMovies;