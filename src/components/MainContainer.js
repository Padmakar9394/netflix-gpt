import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies)  return;

    const mainMovie = movies[0];
    const { id, original_title, overview } = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id} />
    </div>
  )
}

export default MainContainer;