import React from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
const useNowPlayingMovies = ()=>{

  //Fetch data from tmdb api and update store
  const dispatch=useDispatch();

  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
 
    
  };

React.useEffect(() => {
  getNowPlayingMovies();
},[])
}

export default useNowPlayingMovies;