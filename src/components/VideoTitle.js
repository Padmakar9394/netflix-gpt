import React from 'react';
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="aspect-video w-screen absolute text-white pt-[20%] px-20 bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="text-lg flex items-center">
            <button className="flex items-center text-black bg-white px-8 py-2 rounded-lg hover:bg-opacity-80">
                <span className="mx-2 text-2xl"><FaPlay /></span>
                Play
            </button>
            <button className='flex items-center text-white mx-2 bg-gray-500 bg-opacity-50 px-8 py-2 rounded-lg'>
                <span className='mx-2 text-2xl'><BsInfoCircle /></span>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle