import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="py-2 bg-dark  ">
            <small className="text-muted">Developed by Kemmy copywrite © 2022</small>
            <div className="social-links d-flex align-items-center justify-content-center">
                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/" className="linkedin"><i className="fab fa-github"></i></a>
                <a href className="twitter"><i className="fab fa-twitter"></i></a>
                <a href className="facebook"><i className="fab fa-facebook"></i></a>
                <a href className="instagram"><i className="fab fa-instagram"></i></a>

            </div>
        </div>
    );
};

export default Footer;