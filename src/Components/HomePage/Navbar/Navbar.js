import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo (2).png"
import { UserContext } from '../../../App';
import '../ServiceAreas/ServiceAreas.css'


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://young-beach-67366.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])


    return (
        <nav container class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <div className="col-md-6 ">
                    <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                    <a className="navbar-brand ms-3 h1" href="#home">Computer Garage</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav col-md-5 mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#repair">Repair</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#expert">Expert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link" to="/checkOut/:title">CheckOut</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;