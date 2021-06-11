import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewInfo = (props) => {
    const { quote, name, from, img } = props.review;
    return (
        <div className="card col-md-3 mb-3 me-3 shadow-lg">
            <div className="card-footer bg-light d-flex  align-items-center">
                <img className="mx-3 rounded-circle" src={img} alt="" width="60" />
                <div>
                    <h5 className="text-dark">{name}</h5>
                    <p className="m-0">{from}</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStarHalf} style={{ color: '#ff922b' }} />
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
        </div>
    );
};

export default ReviewInfo;