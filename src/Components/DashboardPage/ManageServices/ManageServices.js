import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageServicesDetails from '../ManageServicesDetails/ManageServicesDetails';

import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [manageServices, setManageServices] = useState([])
    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageServices(data))

    }, [manageServices])
    return (
        <div style={{ backgroundColor: "#12161f", color: "white", height: "950px" }} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-sm-12 col-12 mt-5">
                <h1>HI {loggedInUser.name}...You Have Total {manageServices.length} Service ....!!!!!</h1>
                <div className="row d-flex justify-content-start">
                    {
                        manageServices.map(services => <ManageServicesDetails services={services}></ManageServicesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;