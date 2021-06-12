import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import Icon from '../../../Images/logo (2).png'
import '../ServiceAreas/ServiceAreas.css'

const ServiceInfo = (props) => {
    const { title, description, image, price } = props.service


    const history = useHistory()
    const handleBuy = (title) => {
        history.push(`/checkOut/${title}`)
    }
    return (
        <div className="card mb-3 my-3 border-3 rounded-3 border-danger focus mx-3 col-md-5 ">
            <div style={{ backgroundColor: "#050c1a" }} className="row ">
                <div className="col-md-7  d-grid">
                    <img src={image} alt="..." className="img-fluid my-3" />
                    <button onClick={() => handleBuy(title)} className="btn btn-danger  btn-lg mb-3"><FontAwesomeIcon icon={faTools} /> Repair</button>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <div className="d-flex">
                            <img style={{ height: "50px" }} src={Icon} alt="" />
                            <h5 className="card-title">{title}</h5>
                        </div>

                        <p className="card-text">{description}</p>
                        <h5>Price : {price} $</h5>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceInfo;