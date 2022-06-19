import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Skill from '../Skill/Skill';
// import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            {/* <Skills/> */}
            <Skill/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;