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
          <h3 className="fontSecondary text-white px-2">Collin is a highly dynamic and analytical operations manager and web developer with a Bachelor of Business Administration - BBA focused in Finance, General from University of Nevada, Reno, with 4+ years of experience building customer relations, leading teams to work efficiently, developing performance objectives to achieve customer demand, as well as, 4+ years of applied finance skills in school including; strategic planning, financial reporting, financial modeling, and data analysis. Looking to apply his adaptability, problem-solving, and analytical thinking to further develop his knowledge in the finance and software development industries and implement them into a professional environment. Experienced in HTML, CSS, and JavaScript fundamentals, currently pursuing a career in Full-Stack Web Development.</h3>
          </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default AboutMe;