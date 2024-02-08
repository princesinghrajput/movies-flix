import React from 'react'
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo =useSelector(store =>store.movies?.trailerVideo)
  useMovieTrailer()
  
  return (
    <div >
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/CHKn-yDCE2w?&autoplay=1&mute=1" }frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground