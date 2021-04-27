import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
export default function Contact() {
    return (
        <div id='contact' className='contact'>
            <h2 className='contact__header'>Contact me</h2>
            <h5 className='contact__sub-header'>
                Got an interesting project? Let's work something out!
            </h5>
            <form
                className='contact__form'
                action='mailto:josh.improgo@gmail.com'
                // onSubmit={handleSubmit}
            >
                <button className='contact__form__button'>
                    <span className='contact__form__button__span'>
                        Email me!
                    </span>
                    <AiOutlineSend />
                </button>
            </form>
        </div>
    );
}
