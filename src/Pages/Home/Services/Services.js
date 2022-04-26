// import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useServices([]);

    // useEffect(() => {
    //     fetch('https://gentle-earth-99524.herokuapp.com/service')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;