import React from 'react';
import UpdatePart from '../UpdatePart/UpdatePart';
import Form from '../Form/Form';

const ActiveArea = () => {
    return (
        <div className='max-w-[90%] mx-auto mt-5'>
            <h1 className='text-2xl'>Current Updates</h1>
            <div className=''>
                <Form></Form>
                <UpdatePart></UpdatePart>
            </div>
        </div>
    );
};

export default ActiveArea;