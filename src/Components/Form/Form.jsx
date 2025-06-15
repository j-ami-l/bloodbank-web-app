import React from 'react';
import useInputField from '../../Hooks/formHook';

const Form = () => {

    const [name , nameOnChange] = useInputField('');
    const [adress , adressOnChange] = useInputField('')
    const [bloodGroup , bloodGroupOnChange] = useInputField('')
    const [number , numberOnChange] = useInputField('');

    const HandleOnSubmit = e => {
        e.preventDefault();
        console.log(name , adress , bloodGroup , number) ;
    }


    return (
        <div>
            <form onSubmit={HandleOnSubmit} className='space-y-1'>
                <h2>Name:</h2>
                <input className='input text-black bg-white' type="text"  onChange={nameOnChange}/>
                <br />
                <h2>Address:</h2>
                <textarea className='bg-white text-black p-1' onChange={adressOnChange}></textarea>
                <br />
                <h2>Blood Group:</h2>
                <input type="text" className='bg-white input text-black' onChange={bloodGroupOnChange} />
                <br />
                <h2>Contact Number:</h2>
                <input type="number" name="" id="" className='bg-white input text-black' onChange={numberOnChange} />
                <br />
                <input className='btn bg-gray-400' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;