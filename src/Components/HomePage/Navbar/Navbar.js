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
        <div>
            <nav className="d-flex navbar navbar-expand-lg">
                <div style={{ marginTop: '30px' }} className="container-fluid">
                    <div className="d-flex">
                        <img className="transaction-area" style={{ height: "50px", }} src={logo} alt="" />
                        <h3 className=" text-light fw-bolder ps-4">Computer Garage</h3>
                    </div>
                    <div className="d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-dark" to="/home">Home</Link>
                            </li>
                            <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-dark" to="/checkOut/:title">CheckOut</Link>
                            </li>
                            <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="text-dark" to="/dashboard">Dashboard</Link>
                            </li>

                            {isAdmin && <div>
                                <li style={{ marginLeft: '40px', fontWeight: 'bold', fontSize: '20px' }} className="nav-item pt-2  ">
                                    <Link style={{ textDecoration: 'none' }} className="text-dark" to="/admin"> Admin</Link>
                                </li>
                            </div>}
                            <li style={{ marginLeft: '40px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }} className="btn btn-secondary text-light" to="/login"><FontAwesomeIcon icon={faUserPlus} /> LogIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;