import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        axios.post('https://gentle-earth-99524.herokuapp.com/order', order)
            .then(respone => {
                console.log(respone);
                const { data } = respone;
                if (data.insertedId) {
                    toast('Your order is booked')
                    event.target.reset();
                }
            })
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please Checkout your booking</h2>
            <h3 className='text-center text-info'>{service.name}</h3>


            <form onSubmit={handlePlaceOrder} className='text-center mt-3 border p-4'>
                <input className='w-75' value={user?.displayName} type="text" name="name" id="" placeholder='Your name' required readOnly disabled /><br /><br />

                <input className='w-75' value={user?.email} type="email" name="Email" id="" placeholder='Your Email' required readOnly disabled /><br /><br />

                <input className='w-75' type="text" value={service.name} name="service" id="" placeholder='The Service you want' required readOnly /><br /><br />

                <input className='w-75' type="text" name="address" id="" placeholder='Your Address' required autoComplete='off' /><br /><br />

                <input className='w-75' type="text" name="phone" id="" placeholder='Your Phone number' required autoComplete='off' /><br /><br />

                <input type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;