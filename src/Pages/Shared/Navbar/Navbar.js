import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >=20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    return (
        <div className='nav-bg'>
            <nav className={color ? 'nav-area nav-scroll' : 'nav-area'} id="navbar_top">
                <div className="navbar navbar-expand-lg menu-style fixed-top">
                    <div className="container px-0">
                        <a className="navbar-brand logo-style fs-4 ms-2 ms-md-0" href="#home">Kemmy's Profile</a>

                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="active ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/home#banner">Home</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/home#about">About</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/home#skills">Skills</Nav.Link>
                                </li>

                                <li className="ms-3 ">
                                    <Nav.Link as={HashLink} className="nav-link py-1 py-md-2" to="/home#projects">Projects</Nav.Link>
                                </li>
                                <li className="ms-3 ">
                                    <Nav.Link as={HashLink} className="nav-link py-1 py-md-2" to="/home#contacts">Contacts</Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;