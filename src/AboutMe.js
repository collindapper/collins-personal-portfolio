import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container aboutMePage mt-xl-5 pt-xl-5">
      <div className="d-flex row justify-content-center align-content-center px-auto">
        <div className="col-12 col-xl-11 border-start ps-4">
          <h1 className="aboutMeHeading display-3 fontPrimary colorSecondary px-2">About Me</h1>
          <h3 className="fontSecondary text-white px-2">Collin is an adaptive and creative junior full-stack web developer with proficiency in front-end programming languages such as: HTML, CSS, and ReactJS; Back-end programming knowledge in JavaScript and Ruby, as well as, experience conducting user research and collaborating with developers to build dynamic websites.  Professional strengths include problem-solving, communication and time management. Analytical and leadership mindset from experience in Operations Management.</h3>
          </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default AboutMe;