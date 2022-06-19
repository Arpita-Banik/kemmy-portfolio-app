import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, title, description, image } = project;
    return (
        <div className="col-lg-6 col-12 p-4">
            <div className="row g-0 p-0 portfolio-item ">
                <div className="col-lg-6 m-0" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <div className="portfolio-wrap p-0">
                        <img src={image} alt="" className="blogHero" />
                        <div className="portfolio-info">
                            <div>
                                <h4 className="text-info">Website Name</h4>
                                <p className="text-white">Code</p>

                                <p><a className="text-info" target="_blank" href="/">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="/">Server Side <i className="fas fa-link"></i></a></p>

                                <p className='pt-2'><a className='text-white' target="_blank" href="/">Live Site <i className="fas fa-external-link-alt"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 text-white m-0 py-2" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <h5 className='text-info'> {title}</h5>
                    <p>{description}</p>
                    <p className="fs-5 py-1">Technologies Used</p>
                    <p className="textJustify px-3">React, Bootstrap5, CSS3, Express, MongoDB, Firebase, JWT, Heroku, Stripe</p>
                    <p className="px-3"><a className="text-white ps-2" target="_blank" href="/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="/">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="/">Server Side <i className="fas fa-link"></i></a></p>
                    <button className="btn btn-info btn-style">
                        <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: "#fff" }} >Details</Link>
                    </button>
                    {/* <div>
                        <Link to={`/details/${id}`}><button className="btn "><h5 className="font fw-bold"> Details </h5></button></Link>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default Project;