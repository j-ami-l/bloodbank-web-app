import React from 'react';

const UpdatePart = ({infos}) => {
    console.log(infos)
    return (
        
        <div>
            <h1 className='text-2xl'>Current Count : {infos.length}</h1>
            <br />
            <div className='grid grid-cols-2 gap-5'>
                {
                    infos.map(info=>
                        <div className='border border-red-300 rounded-2xl p-5'>
                            <h1 className='text-2xl'>Name: {info.name}</h1>
                            <h3 className='text-xl'>Address : {info.address}</h3>
                            <h3 className='text-xl'>Contact Number : {info.number}</h3>
                            <h1 className='text-2xl'>Blood Group : {info.bloodGroup}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UpdatePart;