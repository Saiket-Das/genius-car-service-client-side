import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const url = `http://localhost:5000/service/${serviceId}`
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-4'>Welcome to detail: {service.name}</h2>
            <p className='text-center mt-3'>Price: ${service.price}</p>
            <div className='text-center mt-4'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;