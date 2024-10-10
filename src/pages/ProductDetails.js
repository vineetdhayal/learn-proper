import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const p = await data.json();
        setProduct(p);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
        </div>
    )
}

export default ProductDetails
