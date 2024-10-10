import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ProductListing from '../pages/ProductListing';
import BreadCrumb from '../pages/BreadCrumb';


const Breadcrumb = () => {
    return (
        <BrowserRouter>
        <BreadCrumb />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<ProductListing />}></Route>
                <Route path='/products/:id' element={<ProductDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Breadcrumb
