import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageServicesDetails from '../ManageServicesDetails/ManageServicesDetails';
import DashboardNavbar from '../Sidebar/Sidebar';

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
        <div style={{ backgroundColor: "#12161f", color: "white", height: "950px" }} className="pt-5">

            <DashboardNavbar></DashboardNavbar>

            <div className="container mt-5">
                <h1 className="text-center pt-5">HI <span className="text-danger">{loggedInUser.name}</span>...You Have Total {manageServices.length} Service ....!!!!!</h1>
                <div className="row d-flex justify-content-center">
                    {
                        manageServices.map(services => <ManageServicesDetails services={services}></ManageServicesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;