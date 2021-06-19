import React from 'react';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div style={{ backgroundColor: "#12161f", color: "white", height: "900px" }} >
            <div className="row ">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-7 col-sm-12 col-12">
                    <Orders></Orders>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;