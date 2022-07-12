import React from 'react';
import image from '../../image/about.jpg';
import './About.css'


const About = () => {
    return (
        <div id="about" className="about pt-md-5">
            <div className="about-me container"  data-aos="fade-up" delay= "50" data-aos-easing="ease-out-cubic" data-aos-duration="3000">

                <div className="d-flex pt-3">
                    <h5 className="pe-3 ">About</h5> <hr className="hr" />
                </div>
                <p className="text-start display-6 fw-bold">Learn More About Me</p>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <img src={image} className="w-75 d-none d-md-inline-block" alt="" />
                    </div>
                    <div className="col-lg-8 pt-lg-0 content">
                        <h3 className="textJustify">Web Developer &amp; Designer</h3>
                        <p className="fst-italic textJustify">
                            <hr className="hr" />I have completed my graduation in Computer Science and Engineering.I always wanted to be a developer. After discovering my passion for web development, I couldn’t get enough. I made websites as my personal projects. I’m looking forward to bringing that passion to a full-time role in a company.
                        </p>
                        <p className="textJustify">
                            I would like to bring your attention to my key strengths- <br />

                            • Strong command in HTML5, CSS3, Bootstrap, JavaScript, ES6, React, React Router, Bootstrap, Firebase,
                            Node.js, Express, MongoDB
                            • Knowledge of Languages: JavaScript, Python, C

                            • I have some good knowledge in Object-oriented programming and basic problem-solving.

                            • I have done 5+ personal projects in web development

                            •  One thing I can assure you is that I am able to grasp new concepts quickly
                        </p>
                    </div>
                </div>
            </div>

            <div className="counts container">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="far fa-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">1</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="fas fa-project-diagram"></i>
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">8+</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-headset"></i>
                            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">0</span>
                            <p>Hours of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-award"></i>
                            <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter">2</span>
                            <p>Awards</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;