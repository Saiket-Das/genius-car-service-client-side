import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetails(serviceId)

    return (
        <div>
            <h2 className='text-center mt-4'>Welcome to detail: {service.name}</h2>
            <p className='text-center mt-3'>Price: ${service.price}</p>
            <div className='text-center mt-4'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;