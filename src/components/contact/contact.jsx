import React from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Lets talk</h5>
            <h2>Contact Me</h2>
            <div className='container__contact'>
                <div className='container__contact-options'>
                    <article className='contact-option'>
                        <MdOutlineMail/>
                        <h4>Email</h4>
                        <h5>nguyendillon118@gmail.com</h5>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact