import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../HomePage/Navbar/Navbar';
import Payment from '../Payments/Payment/Payment';
const CheckOut = () => {
    const { title } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services])

    let serviceType = services.find(serviceType => serviceType.title === title);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...serviceType, orderTime: new Date(), status: 'Pending' };
        delete newAddToCart._id
        fetch('https://young-beach-67366.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully')
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="row d-flex  m-5 p-5">
                <div className="col-md-7" >
                    <table className="table table-hover table-striped table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bolder">{title}</td>
                                <td className=" fw-bolder">{serviceType && serviceType.description}</td>
                                <td className="fw-bolder">{serviceType && serviceType.price + '$'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-md-12  d-flex justify-content-end">
                        <button onClick={addToCart} className="btn btn-secondary btn-lg" ><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <h3 className="mb-3">Please {loggedInUser.name}... Pay For Getting Your Services ....!!!!!</h3>
                    <Payment></Payment>
                </div>

            </div>
        </div>

    );
};

export default CheckOut;