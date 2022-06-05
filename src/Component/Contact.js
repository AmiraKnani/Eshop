import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [sender_name, set_sender_name] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [message, set_message] = useState('');
    const handleName = (e) => {
        set_sender_name(e.target.value)

    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value)

    }
    const handlemessage = (e) => {
        set_message(e.target.value)

    }
    const sendMail = (e) => {
        e.preventDefault();
        send(
            'service_8j0p0fd',
            'template_x430lpb',
            { sender_name, sender_email, message },
            'ZI2HUO6U0zPsqZdR5'

        )
            .then((response) => {
                console.log('Message sent successfully', response.statuts, response.text)
            })
            .catch((err) => {
                console.log('Failed', err)
            })
        set_sender_name('');
        set_sender_email('');
        set_message('');
    }
    return (
        <div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <img src="/assets/ba.jpg" className="card-img border-inset" alt="Background" height="250px" opacity="0.1" />
                    <img src="/assets/img_avatar.jpg" className="avatar" />

                    <h3 class="animate-charcter"> Contact Us</h3>
                </div>
            </div>



            <form onSubmit={sendMail}>
                <input className="name" type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="Your name" />
                <input className="name" type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="Your Address Email" />
                <textarea className="name" name="message" value={message} onChange={handlemessage} required placeholder="Your message" />
                <button type="submit" className="btn btn-warning">Send mail </button>
            </form>
            <img src="/assets/bb.jpg" className="card-img border-inset" alt="Background" height="250px" opacity="0.1" /><hr/>
        </div>
    )
}

export default Contact