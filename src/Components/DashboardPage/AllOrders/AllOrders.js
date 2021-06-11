import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllOrdersDetails from '../AllOrdersDetails/AllOrdersDetails';
import Sidebar from '../Sidebar/Sidebar';


const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(allOrders);

    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])

    return (
        <div className="row bg-light">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-sm-12 col-12">
                <h1 className="mt-5 text-center">HI {loggedInUser.name}...You Have  Total  {allOrders.length} Orders Pending....!!!!!</h1>

                <div className="row d-flex justify-content-start">
                    {
                        allOrders.map(allOrder => <AllOrdersDetails allOrder={allOrder}></AllOrdersDetails>)
                    }
                </div>


            </div>

        </div>


    );
};

export default AllOrders;