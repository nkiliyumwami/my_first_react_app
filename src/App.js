import React, {useEffect, useState} from 'react'

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


//movieDB apiUrl+key
const API_URL = 'http://www.omdbapi.com?apikey=2e18ba81'

// const movie1 = {
//     "Title": "Amazing SpiderMan",
//     "Year": "2022",
//     "Type": "movie",
//     "Poster": "N/A"
// }


const App = () => {
    //Create a state to get /hold all movies
    const [ movies, setMovies] = useState([])

    //Create a state to search movie(search button functionality)
    const [searchTerm, setSearchTerm] = useState(' ')

//Get the movies once a page load
useEffect(() => {
    searchMovies('Batman')
}, []);

//get the data(movies) as soon as the page load
const searchMovies = async ( title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    
};


  return (
    <div className='app'>
        <h1>MovieLand</h1>

        <div className="search">
            <input 
                value={searchTerm}
                placeholder='Search for movies' 
                onChange={(e) => setSearchTerm(e.target.value)}/>

            <img 
                src={SearchIcon} 
                alt='search' 
                onClick={() => searchMovies(searchTerm.toLowerCase())} />
        </div>

        {/* Render movies: Check if there is a movie */}

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        
    </div>
  )
};


export default App