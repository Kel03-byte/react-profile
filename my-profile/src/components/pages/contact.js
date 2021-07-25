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
        } else if (userName && !validateEmail(email) && !message ) {
            setErrorMessage('Please enter a valid email and short message');
        } else if (userName && validateEmail(email) && !message ) {
            setErrorMessage('Please enter a short message');
        } else if (!userName && validateEmail(email) && !message ) {
            setErrorMessage('Please enter your name and a short message');
        } else if (!userName && !validateEmail(email) && message ) {
            setErrorMessage('Please enter your name and a valid email');
        } else if (!userName && validateEmail(email) && message ) {
            setErrorMessage('Please enter your name');
        } else if (userName && !validateEmail(email) && message ) {
            setErrorMessage('Please enter a valid email');
        } else {
            setErrorMessage(`Hello ${userName}, the message has been sent`);
            setUserName(' ');
            setMessage(' ')
            setEmail(' ');
        }
    };

    return (
        <div id='header4'>
            <p>Contact</p>
            <form className="form">
                <div id='form-input'>
                    <label htmlFor="username">Username:</label>
                    <textarea defaultValue={userName} name="userName" type="text" id="username" onChange={handleInputChange} rows='1' cols="50" />
                </div>
                <div id='form-input'>
                    <label htmlFor="email">Email</label>
                    <textarea defaultValue={email} name="email" type="email" id="email" onChange={handleInputChange} rows='1' cols="50" />
                </div>
                <div id='form-input'>
                    <label htmlFor="message">Message:</label>
                    <textarea defaultValue={message} name="message" type="text" id="message" onChange={handleInputChange} rows="4" cols="50" />
                </div>
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}