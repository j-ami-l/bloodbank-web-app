import React, { Suspense } from 'react';
import Navbar from '../../Components/Header/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;