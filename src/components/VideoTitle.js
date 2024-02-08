import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 '>{overview}</p>
       
       <div>
        <button className='bg-gray-400 text-black p-4 px-12  rounded-lg text-XL hover:bg-opacity-80 '>   <i class="fa-solid fa-play"></i> Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg text-XL  '>  <i class="fa-solid fa-circle-info"></i>   More Info</button>

       </div>
        
    </div>
  )
}

export default VideoTitle