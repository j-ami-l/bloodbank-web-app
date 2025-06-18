import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';



const AllPost = () => {



    const [AllPost, setAllPost] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setAllPost(data);
            })
    }, [])




    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-2xl text-center font-bold mb-3'>Current Patient : {AllPost.length}</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    AllPost?.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default AllPost;