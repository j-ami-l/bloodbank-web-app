import React, { useEffect, useState } from 'react';
import useInputField from '../../Hooks/formHook';
import ActiveArea from '../ActiveArea/ActiveArea'
import { Link, Navigate, Outlet, useNavigate, useNavigation } from 'react-router';
const LoginPage = () => {
    const [name, nameOnChange] = useInputField('');
    const [bloodGroup, bloodGroupOnChange] = useInputField('');
    const [address, addressOnChange] = useInputField('');


    const navigate = useNavigate();
    const [isSubmit , setIsSubmit] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        const new_info = {
            name,
            address,
            bloodGroup
        }
        
    }
    const handleSubmit = () =>{
        if(name.length > 0 && bloodGroup.length > 0 && address.length > 0){
            setIsSubmit(!isSubmit);
        }
        else {
            alert("fillup all boxes")
        }
    }
    useEffect(()=>{
        if(isSubmit){
            navigate("/mainPage");
        }
    }, [navigate, isSubmit])

    
    return (
        <div className='border w-[250px] p-5 rounded-2xl mx-auto mt-30'>
            <form onSubmit={handleForm} className='space-y-2'>
                <h3>Name:</h3>
                <input required className='input bg-white text-black' placeholder='Your Name' type="text" onChange={nameOnChange} />
                <br />
                <h3>Blood Group:</h3>
                <input required type="text" placeholder='Your Blood Group' className='input bg-white text-black' onChange={bloodGroupOnChange} />
                <br />
                <h3>Your Addres:</h3>
                <input required  type="text" placeholder='Your Address' className='input bg-white text-black' onChange={addressOnChange} />
                <br />
                <Link onClick={handleSubmit} ><input className='btn bg-gray-400 hover:bg-red-300' type="submit" value="Submit" /></Link>
            </form>
        </div>
        );
};

export default LoginPage;