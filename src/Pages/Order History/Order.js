import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {

    const [order, setOrder] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `https://gentle-earth-99524.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url)
                setOrder(data)
            }

            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }

            //------- Another  way -------
            // await axios.get(url)
            //     .then(response => {
            //         const { data } = response;
            //         setOrder(data)
            //         console.log(data)})
        }
        getOrder()

    }, [])

    return (
        <div>
            <h2>Your order history: {order.length}</h2>
        </div>
    );
};

export default Order;