import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';


const ServiceAreas = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 style={{ fontSize: "65px" }}>Services We Provide</h1>
            </div>

            <div className="row d-flex  justify-content-center">
                {
                    services.map(service => <ServiceInfo service={service}  ></ServiceInfo>)
                }
            </div>
        </div>

    );
};

export default ServiceAreas;