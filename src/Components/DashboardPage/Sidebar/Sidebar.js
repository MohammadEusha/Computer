import { faCartArrowDown, faComments, faGripHorizontal, faHome, faServer, faSortAmountDownAlt, faUserMinus, faUsersCog, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
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
        <div className="sidebar footer-area d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }} className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/checkOut/:title" style={{ textDecoration: 'none' }} className="text-white">
                        <FontAwesomeIcon icon={faCartArrowDown} /> <span>CheckOut</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" style={{ textDecoration: 'none' }} className="text-white">
                        <FontAwesomeIcon icon={faComments} /> <span>Add Review</span>
                    </Link>
                </li>
                {isAdmin && <div>

                    <li>
                        <Link to="/admin" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faUserShield} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faServer} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allOrders" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faSortAmountDownAlt} /> <span>Pending Orders</span>
                        </Link>
                    </li>

                </div>}

            </ul>
        </div>
    );
};

export default Sidebar;