import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-red-500 flex justify-between p-5 px-20'>
            <h1 className='text-4xl text-white'>Blood</h1>
            <div className='space-x-2'>
                <button className='btn'>Sign up</button>
                <button className='btn'>Contact</button>
                <button className='btn'>About</button>
            </div>
        </div>
    );
};

export default Navbar;