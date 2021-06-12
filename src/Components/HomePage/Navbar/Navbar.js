import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo (2).png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
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
        // <div>
        //     <nav className="d-flex navbar  navbar-expand-lg">
        //         <div style={{ marginTop: '30px' }} className="container-fluid">
        //             <div className="d-flex">
        //                 <img className="transaction-area" style={{ height: "50px", }} src={logo} alt="" />
        //                 <h3 className=" text-light fw-bolder ps-4">Computer Garage</h3>
        //             </div>
        //             <div className="d-flex flex-row-reverse" id="navbarNav">
        //                 <ul className="navbar-nav justify-content-end">
        //                     <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
        //                         <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-light" to="/home">Home</Link>
        //                     </li>
        //                     <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
        //                         <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-light" to="/checkOut/:title">CheckOut</Link>
        //                     </li>
        //                     <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
        //                         <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-light" to="/dashboard">Dashboard</Link>
        //                     </li>

        //                     {isAdmin && <div>
        //                         <li style={{ marginLeft: '40px', fontWeight: 'bold', fontSize: '20px' }} className="nav-item pt-2  ">
        //                             <Link style={{ textDecoration: 'none' }} className="text-light" to="/admin"> Admin</Link>
        //                         </li>
        //                     </div>}
        //                     <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
        //                         <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="btn btn-danger text-light" to="/login"><FontAwesomeIcon icon={faUserPlus} /> LogIn</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <img className="transaction-area ms-3" style={{ height: "50px", }} src={logo} alt="" />
                <a className="navbar-brand col-md-6 ml-auto h1" href="#home">Computer Garage</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-5 ps-5 mb-2 mb-lg-0 col-md-4 h5">
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