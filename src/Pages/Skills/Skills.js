import React from 'react';
import './Skill.css';

const Skills = () => {
    return (
        <div className="skills">
            <div className=" container pt-4">
                <div className="section-title d-flex">
                    <h5 className="pe-3">Skills</h5> <hr className="hr" />
                </div>

                <div className="row skills-content mt-2 mt-md-4">

                    <div className="col-lg-6 col-6">

                        <div className="progress">
                            <span className="skill">HTML5 <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-html" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS3 <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-css" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Bootstrap <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-bt" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">React <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-react" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6 col-6">

                        <div className="progress">
                            <span className="skill">Node.js <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-Node" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Express <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-Express" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">MongoDB <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-mongoDB" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Firebase <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-firebase" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Python <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar-python" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Skills;