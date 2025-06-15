import React, { useState } from 'react';
import UpdatePart from '../UpdatePart/UpdatePart';
import Form from '../Form/Form';

const ActiveArea = () => {
    const [infos , setinfos] = useState([])

    const handleAddinfo = newInfo =>{
        const newInfos = [...infos , newInfo]
        setinfos(newInfos);
    }

    return (
        <div className='max-w-[90%] mx-auto mt-5'>
            <div className='grid grid-cols-2'>
                <Form handleAddinfo={handleAddinfo}></Form>
                <UpdatePart infos={infos}></UpdatePart>
            </div>
        </div>
    );
};

export default ActiveArea;