import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
 const [movies, setMovies] = useContext(MovieContext);
 console.log(movies);

    return (
        <div>
            {movies.map((movie) => {
                return <Movie name={movie.name} price={movie.price}></Movie>
            })}
        </div>
    )
}

export default MovieList
