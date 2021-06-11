import React from 'react';
import expert from '../../../Images/expert.png'
import onTime from '../../../Images/on-time.png'
import experience from '../../../Images/experience.png'
import techno from '../../../Images/best techno.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 style={{ fontSize: "65px" }}>How We Work</h1>
            </div>
            <div className="row mt-3 offset-md-1 d-flex justify-content-center">
                <div className="card focus shadow-lg col-md-2  m-3">
                    <img src={expert} className="card-img-top " alt="..." />
                    <div className="card-body ">
                        <h4>Expert Engineers</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </div>
                </div>
                <div className="card focus shadow-lg col-md-2 m-3">
                    <img src={onTime} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h4>On time Delivery</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </div>
                </div>
                <div className="card focus shadow-lg col-md-2 m-3">
                    <img src={techno} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h4>Best Technology</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </div>
                </div>
                <div className="card focus shadow-lg col-md-2 m-3">
                    <img src={experience} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h4>25 Years Experience</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;