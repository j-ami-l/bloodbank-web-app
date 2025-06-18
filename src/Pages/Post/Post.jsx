import React from 'react';

const Post = ({post}) => {

    const {name , address , bloodGroup , emergency} = post

    return (
        <div className='border-2 border-rose-800 p-5 rounded-2xl'>
            <h1 className='text-xl'>Name : {name}</h1>
            <h2>Medical Adress : {address}</h2>
            <h1 className='text-xl font-bold'>Blood Group : {bloodGroup}</h1>
            {
                (emergency && <h1 className='text-red-500'>Emergency</h1> )
            }
        </div>
    );
};

export default Post;