import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!userName && !validateEmail(email) && !message) {
            setErrorMessage('Please fill out the form');
        } else if (userName && !validateEmail(email) && !message) {
            setErrorMessage('Please enter a valid email and short message');
        } else if (userName && validateEmail(email) && !message) {
            setErrorMessage('Please enter a short message');
        } else if (!userName && validateEmail(email) && !message) {
            setErrorMessage('Please enter your name and a short message');
        } else if (!userName && !validateEmail(email) && message) {
            setErrorMessage('Please enter your name and a valid email');
        } else if (!userName && validateEmail(email) && message) {
            setErrorMessage('Please enter your name');
        } else if (userName && !validateEmail(email) && message) {
            setErrorMessage('Please enter a valid email');
        } else {
            setErrorMessage(`Hello ${userName}, your message has been sent!`);
            setUserName(' ');
            setMessage(' ')
            setEmail(' ');
        }
    };

    return (
        <div id='header4'>
            <h1>Contact</h1>
            <form className='form'>
                <div id='form-input'>
                    <label htmlFor='username'>Name</label>
                    <p><textarea defaultValue={userName} name='userName' type='text' id='input-text' onChange={handleInputChange} rows='1' cols='40' placeholder='Your name'/>
                </p></div>
                <div id='form-input'>
                    <label htmlFor="email">Email</label>
                    <p><textarea defaultValue={email} name="email" type="email" id="input-text" onChange={handleInputChange} rows='1' cols='40' placeholder='Your email address' />
                    </p></div>
                <div id='form-input'>
                    <label htmlFor='message'>Message</label>
                    <p><textarea defaultValue={message} name='message' type='text' id='input-text' onChange={handleInputChange} rows='6' cols='40' placeholder='Please leave a short message!' />
                </p></div>
                <button id='submit-btn' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}