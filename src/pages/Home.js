import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './data.css';

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const p = await data.json();
        console.log(p.products);
        setTrendingProducts(p.products.slice(0, 6));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <span>Trending Products</span>
            <div className='product-grid'>
                {trendingProducts.map((p) => {
                    return (
                        <div className='product-card' key={p.id}>
                            <Link to={`/products/${p.id}`}>
                                <img src={p.thumbnail} alt={p.title}></img>
                                <h1>{p.title}</h1>
                                <h1>{p.price}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
