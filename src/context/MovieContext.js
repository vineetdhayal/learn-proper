import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const data = [{
    name: 'Harry Porter',
    price: '10',
    id: 1
},
{
    name: 'Harry Porter',
    price: '10',
    id: 2
},
{
    name: 'Harry Porter',
    price: '10',
    id: 3
}];

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState(data);

    return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
}
