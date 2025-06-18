import React from 'react';
import bannerpic from '../../assets/bannerPic.jpg'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='flex w-[90%] mx-auto mt-5 p-10'>
            <div className='flex flex-col justify-center items-start flex-1/2 space-y-2'>
                <h1 className='text-3xl font-bold'>Need Blood....?</h1>
                <p className='text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas harum in est necessitatibus nobis itaque fugit molestias ullam facere.</p>
                <p>mail:mdhasanjamil0001@gmail.com</p>
                <Link to={'/patientForm'}><button className='btn'>Patient details form</button></Link>
            </div>
            <div className='bg-gray-300 rounded-2xl flex-1/2'>
                <img className='w-[500px]' src={bannerpic} alt="" />
            </div>
        </div>
    );
};

export default Banner;