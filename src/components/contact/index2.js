import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Clicked');
        console.log(isValid);
    };

    const isValid = name !== '' && email !== '' && message !== '';
    return (
        <div className='contact'>
            <h2 className='contact__header'>Contact Me.</h2>
            <h5 className='contact__sub-header'>
                Got an interesting project? Let's work something out!
            </h5>
            <form
                className='contact__form'
                action='mailto:josh.improgo@gmail.com'
                // onSubmit={handleSubmit}
            >
                <label className='contact__form__label' htmlFor='name'>
                    Name
                </label>
                <input
                    className='contact__form__input'
                    name='name'
                    autoComplete='off'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label className='contact__form__label' htmlFor='email'>
                    Email
                </label>
                <input
                    className='contact__form__input'
                    name='email'
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label className='contact__form__label' htmlFor='message'>
                    Message
                </label>
                <textarea
                    className='contact__form__textarea'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button className='contact__form__button' disabled={!isValid}>
                    <span className='contact__form__button__span'>Send</span>
                    <AiOutlineSend />
                </button>
            </form>
        </div>
    );
}
