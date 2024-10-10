import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h1>Total movies: {movies.length}</h1>
        </div>
    )
}

export default Nav
