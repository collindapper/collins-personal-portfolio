import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container aboutMePage mt-xl-5 pt-xl-5">
      <div className="d-flex row justify-content-center align-content-center px-auto">
        <div className="col-12 col-xxl-11 border-start mx-auto">
          <h1 className="aboutMeHeading display-3 fontPrimary colorSecondary ps-4">Contact Me</h1>
          <h3 className="fontSecondary text-white ps-4">
            Location: Tracy, California, United States<br className="mb-4"/>
            Email: collindapper@gmail.com<br className="mb-4"/>
            LinkedIn: <a className="contactLink" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank">Click Here</a><br className="mb-4"/>
            GitHub: <a className="contactLink" href="https://github.com/collindapper" target="_blank">Click Here</a><br className="mb-4"/>
            Resume: <a className="contactLink" href="/media/Collin Dapper Resume 2022.pdf" target="_blank">Click Here</a><br className="mb-4"/>
          </h3>
          </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default ContactMe;