import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
      <div className="d-flex row justify-content-center align-items-center mt-xl-2 pt-xl-2 my-xl-auto py-xl-auto">

        <div className=" col-11 col-xl-6 pe-4 mb-4 mb-xl-0">
          <h3 className="fontSecondary text-white text-end mb-0 pb-0">My name is,</h3>
          <h1 className="fontPrimary colorPrimary display-1 text-end mt-0 pt-0">Collin Dapper</h1>
          <br/>
          <h3 className="fontSecondary text-white text-end mb-0 pb-0">I am a,</h3>
          <h1 className="fontPrimary colorSecondary display-3 text-end">Full-Stack Developer</h1>
        </div>

        <div className="border-start col-11 col-xl-6 ps-4 updatesList">
          <h3 className="fontSecondary text-white text-start mb-0 pb-0">Latest Updates:</h3>
            <h5 className="fontPrimary color-light text-start mt-2 ms-2">June 2022 -</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published 'Currency Converter' project</h5>

              <h5 className="fontPrimary text-start ms-4"><a className="updatesLink me-1" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/details/skills/" target="_blank"><i className="fab fa-linkedin me-1"></i></a>Endorsed for HTML, CSS, JavaScript, and Full-Stack Development</h5>

            <h5 className="fontPrimary color-light text-start mt-4 ms-2">May 2022 -</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published '10 Second Math Game' project</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published 'API To Do List' project</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><a className="updatesLink me-1" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/details/skills/" target="_blank"><i className="fab fa-linkedin me-1"></i></a>Endorsed for Dynamic Websites</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/certifications/"><i className="fas fa-medal me-1"></i></Link>Received certification in Dynamic Website Development</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published 'Dynamic JQuery Shopping List' project</h5>

            <h5 className="fontPrimary color-light text-start mt-4 ms-2">April 2022 -</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/certifications/"><i className="fas fa-medal me-1"></i></Link>Received certification in JavaScript Programming</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published 'BlackJack Browser Game' project</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/projects/"><i className="fas fa-code me-1"></i></Link>Published first personal portfolio design</h5>

            <h5 className="fontPrimary color-light text-start mt-4 ms-2">March 2022 -</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><a className="updatesLink me-1" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/details/skills/" target="_blank"><i className="fab fa-linkedin me-1"></i></a>Endorsed for Team Leadership and Management </h5>

            <h5 className="fontPrimary color-light text-start mt-4 ms-2">February 2022 -</h5>

              <h5 className="fontPrimary color-light text-start ms-4"><Link className="updatesLink me-1 " to="/certifications/"><i className="fas fa-medal me-1"></i></Link>Received certification in HTML CSS Development</h5>
          
        </div>

      </div>
      <Footer />
    </div>
    )
  }
}

export default LandingPage;