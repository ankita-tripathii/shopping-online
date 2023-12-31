import React from 'react'
import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutPage from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ProductDetail from "./pages/product_detail";

import { Provider } from 'react-redux';
import store from './redux/store/store';

import {
    Routes,
    Route,
  } from "react-router-dom";


function App() {
  return (
    
        <>
            <Provider store={store}>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            </Provider>
       </>



  );
}

export default App;
