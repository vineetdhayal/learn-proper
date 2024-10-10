import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    const [movies, setMovies] = useContext(MovieContext);

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, { name, price, id: movies[movies.length - 1].id + 1 }]);
        setPrice('');
        setName('');
    }

    return (
        <form onSubmit={addMovie}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie
