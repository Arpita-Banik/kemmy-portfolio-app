import React from 'react';
import main from '../../image/profile.png';
import Particle from '../Particle';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {

    return (
        <div className="background p-0" id='banner'>
            <div className='row mx-auto'>
                <Particle height="800px" width="100%" />
                <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <div className='banner-info mt-md-0 pt-md-5 pt-3'>
                        <h1 className="banner-header text-info mt-5 mt-md-0 ms-md-5 ps-md-4">HEY !! IT'S KEMMY !!</h1>
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
                            <a href="https://www.linkedin.com/in/kemi-akinrotimi-99a488206/" >
                                <i className="icon me-4 fab text-info fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Kemmy2020">
                                <i className="icon me-4 ps-2 fab text-info fa-github"></i>
                            </a>
                            <a href="https://twitter.com/zayanrayan28" >
                                <i className="icon ps-2 fab text-info fa-twitter"></i>
                            </a>
                        </div>
                        <div className="mt-md-5 mt-4">
                            <a className="btn  text-light me-4 btn-style"  href="https://drive.google.com/uc?export=download&id=IwAR266GMwgRpUTKvSfAQICjQMM3W58oAdkdmcI3YgHiTei7efHZkgaLXDNtw">
                                My Resume
                            </a>
                            <button className="btn btn-style">
                                <a style={{ textDecoration: 'none', color: "#fff" }}  href="https://docs.google.com/document/d/1xKt-OUqS0wsg_vktSs_15IstgPEYuAmi/edit?fbclid=IwAR266GMwgRpUTKvSfAQICjQMM3W58oAdkdmcI3YgHiTei7efHZkgaLXDNtw#">View</a></button>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex mt-md-5 mt-3 justify-content-center mx-auto" data-aos="fade-left" delay="50" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <img className='main-img' src={main} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;      