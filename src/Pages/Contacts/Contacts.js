import React from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hkl625k', 'template_jyrxokk', e.target, '3HwxuhJNyNy_Na7J0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert('Sent Email Successfully');
        e.target.reset();
    };
    return (
        <div className='contact-bg ' id='contacts'>
            <div className="py-md-3 container text-white">
                <div className="section-title d-flex">
                    <h5 className="pe-3">Contacts</h5> <hr className="hr" />
                </div>
                <div className="contact-section row mt-md-4">
                    <div className="col-md-5 text-center pb-3">
                        <div className="contact">
                            <div className="cont-icon">
                                <span><i className="fas fa-phone-alt"></i></span>
                            </div>
                            <h5 className="font fw-bold">+1 (204) 2283533</h5>
                        </div>

                        <div className="contact">
                            <div className="cont-icon">
                                <span><i className="fa fa-envelope"></i></span>

                            </div>
                            <h5 className="font fw-bold">akinrotimioluwajemi@gmail.com</h5>
                        </div>

                        <div className="contact">
                            <div className="cont-icon">
                                <span><i className="fas fa-map-marker-alt"></i></span>

                            </div>
                            <h5 className="font fw-bold">Manitoba,Canada</h5>
                        </div>
                    </div>

                    <div className="col-md-7 text-center add-details">
                        <form onSubmit={sendEmail}>
                            {/* {handleSubmit(onSubmit)} */}
                            <input type="text" name="name" placeholder="Enter Your Name" />
                            <input type="email" name="user_email" placeholder="Your Email" />
                            <textarea type="message" name="message" rows="4" placeholder="Enter your Message" />
                            <input className="inputSubmit py-2 border-0" type="submit" placeholder="Send" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;