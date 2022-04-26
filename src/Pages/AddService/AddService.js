import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = 'https://gentle-earth-99524.herokuapp.com/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => {
                console.log(result)
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-3' placeholder='Your name' {...register("name", { required: true, maxLength: 20 })} />

                <textarea className='mt-3' placeholder='Description' {...register("description")} />

                <input className='mt-3' placeholder='Price' type="number" {...register("price")} />

                <input className='mt-3' placeholder='Photo URL' type="text" {...register("img")} />

                <input className='btn-primary mt-3' type='submit' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;