import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieID}) => {
    useMovieTrailer(movieID);

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    // console.log(trailer);
    
  return (
    <div className="w-screen">
        <iframe className="w-full aspect-video"
                src={"https://www.youtube.com/embed/7u3zBVAxx_w?si=" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>        
        </iframe>
    </div>
  )
}

export default VideoBackground;