import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Navbar = () => {
    // const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
            <div className="col-6">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Shopping Online</NavLink>
             </div>
             <div className="col-6">   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                         <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar