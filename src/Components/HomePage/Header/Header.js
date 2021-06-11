import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start">
            <div className=" col-md-5 col-sm-6 col-12 mb-5 ms-2">
                <p style={{ fontSize: "65px" }} className="text-light ms-5">Best Computer Repair Solution Provider</p>
                <button className="btn btn-lg btn-secondary text-light ms-5"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
            </div>
        </div>
    );
};

export default Header;