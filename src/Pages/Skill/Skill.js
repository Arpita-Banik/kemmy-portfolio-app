import React from 'react';
import './MySkill.css';

const Skill = () => {
    window.onload = function () {
        let bar = document.querySelectorAll('.bar');
        bar.forEach((progress) => {
            let value = progress.getAttribute('data-value');
            progress.style.width = `${value}%`;
            let count = 0;
            let progressAnimation = setInterval(() => {
                count++;
                progress.setAttribute('data-text', `${count}%`);
                if (count >= value) {
                    clearInterval(progressAnimation);
                }
            }, 15);
        });
    };

    return (
        <div className="progress_container pt-md-5 " id='skills'>
            <div className="container">
                <div className="section-title d-flex">
                    <h5 className="pe-3 text-white">Skills</h5> <hr className="hr" />
                </div>
                <div className="row my-0">
                    <div className="col-md-6 col-6">
                        <div className="progress">
                            <div className="progress_item">
                                <h6 className="progress_title">HTML5</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="96" data-text="96"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">CSS3</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="85" data-text="85"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">Bootstrap</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="90" data-text="90"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">Javascript</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="90" data-text="90"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-6">
                        <div className="progress">
                            <div className="progress_item">
                                <h6 className="progress_title">React</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="90" data-text="90"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">Node</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="85" data-text="85"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">Mongo</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="90" data-text="90"></div>
                                </div>
                            </div>
                            <div className="progress_item">
                                <h6 className="progress_title">Express</h6>
                                <div className="progress_bar">
                                    <div className="bar" data-value="90" data-text="90"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="interests">

                    <div className="section-title d-flex mt-md-5 mt-3">
                        <h5 className="pe-3">Interests</h5> <hr className="hr" />
                    </div>

                    <div className="row mt-md-5 mt-4 container">
                        <div className="col-lg-3 col-md-4 ">
                            <div className="icon-box">
                                <i className="fas fa-passport text-white"></i>
                                <h3>Web Designing</h3>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="fas fa-drafting-compass text-success"></i>
                                <h3>Web Developing</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0 ">
                            <div className="icon-box">
                                <i className="fas fa-code text-info"></i>
                                <h3>Problem Solving</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="fas fa-database text-green"></i>
                                <h3>Database</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Skill; 