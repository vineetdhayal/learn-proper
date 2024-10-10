import React from 'react';
import './job.css';

const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
}

const ContactForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact Here</h1>
            <input type='text' name='name' onChange={handleChange} placeholder='Enter Name Here'></input>
            <input type='phone' name='phone' onChange={handleChange} placeholder='Enter Phone Number'></input>
            <textarea name='message' cols={30} onChange={handleChange} rows={10}></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ContactForm
