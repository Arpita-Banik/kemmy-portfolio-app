import React from 'react';
import main from '../../image/main.png';
import Particle from '../Particle';
import Typewriter from 'typewriter-effect';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
            <div className="background p-0" id='banner'>
                <div className='row pt-5'>
                <Particle height="800px" width="100%" />
                    <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                        <div className='banner-info mt-md-0'>
                            <h1 className="banner-header text-info mt-3 mt-md-0 ms-md-5 ps-md-4">HEY !! IT'S KEMMY !!</h1>
                            <h2 className='fw-bold text-white'>
                                <span>  I AM A
                                    <Typewriter
                                        options={{
                                            strings: [' WEB DESIGNER !', ' WEB DEVELOPER !', ' REACT JS DEVELOPER !', ' FRONT END DEVELOPER !! 🙂'],
                                            cursor: ' ',
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h2>
                            <div className="mt-4">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="icon me-4 fab text-info fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <i className="icon me-4 fab text-info fa-github"></i>
                                </a>
                                <a href="https://web.facebook.com/" target="_blank">
                                    <i className="icon fab text-info fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="mt-5">
                                <a className="btn btn-info text-light me-4 btn-style" target="_blank" href="https://drive.google.com/">
                                    My Resume
                                </a>
                                <button className="btn btn-info btn-style">
                                    <Link
                                        style={{ textDecoration: 'none', color: "#fff" }} to="/contact">Contact</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 pt-3"  data-aos="fade-left" delay= "50" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                        <img className='main-img' src={main} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Banner;      