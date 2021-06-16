import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
            <div className=" col-md-6 col-sm-6 col-12 my-5 py-5 ">
                <h1 className="text-light  display-1">Best Computer Repair Solution Provider</h1>
                <button className="btn btn-danger btn-lg p-4 text-light  col-md-4 rounded-pill btn-block"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
            </div>
        </div>
    );
};

export default Header;