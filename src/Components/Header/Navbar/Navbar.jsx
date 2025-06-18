import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {


    const link = <>
        <Link to={'/'} className='mx-5 btn hover:bg-red-400'><a>Home</a></Link>
        <Link to={'/about'} className='mx-5 btn hover:bg-red-400'><a>About</a></Link>
        <Link to={'/patientForm'}  className='mx-5 btn hover:bg-red-400'><a>Patient details form</a></Link>

    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className='border-2 rounded-md '><a className="btn btn-ghost text-xl">Blood</a></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className="btn">Login</a>
                <a className="btn">Signup</a>
            </div>
        </div>
    );
};

export default Navbar;