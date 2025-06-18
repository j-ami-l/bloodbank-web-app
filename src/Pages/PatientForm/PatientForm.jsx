import React from 'react';
import useInputField from '../../Hooks/formHook';
import formbg from '../../assets/formbg.png'
const PatientForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [address, addressOnChange] = useInputField('');
    const [bloodGroup, bloodGroupOnChange] = useInputField('');
    const [number, numberOnChange] = useInputField('');

    const handleForm = e => {
        e.preventDefault();
    }

    return (
        <div className=''>
            <div className='border-2 border-red-300 p-10 w-[400px] mx-auto rounded-2xl mt-20'>
                <div>
                    <img src={formbg} alt="" />
                </div>
                <form onSubmit={handleForm} className='space-y-2'>
                    <input className='input' placeholder='Patiend Name' type="text" onChange={nameOnChange} />
                    <br />
                    <input className='input' placeholder='Medical Address' type="text" onChange={addressOnChange} />
                    <br />
                    <input className='input' type="text" placeholder='Patient Blood Group' onChange={bloodGroupOnChange} />
                    <br />
                    <input className='input' placeholder='Contact Number' type="text" onChange={numberOnChange} />
                    <br />
                    <div className='flex gap-2'><input type="checkbox" defaultChecked className="checkbox" />
                    <h3 className='text-md font-bold text-red-600'>Emergency ?</h3></div>
                    <input className='btn' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default PatientForm;