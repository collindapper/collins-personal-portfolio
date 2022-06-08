import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class Education extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container educationPage mt-xl-2 ">
      <div className="d-flex row mx-auto justify-content-center px-auto">

        <div className="col-12 col-xl-11">
          <h1 className="educationHeading display-3 fontPrimary colorSecondary px-xl-2 mb-5 mb-xl-0 text-center text-xl-start">Education</h1>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-xl-4 altcademy">
             <img className="educationImg" src="/images/Altcademy.jpg" />
            </div>
            <div className="col-10 col-xl-8 altcademy my-auto mx-xxl-auto ps-xl-4">
              <h2 className="educationHeading colorPrimary fontSecondary mb-4">Altcademy</h2>
              <h3 className="d-xl-flex text-white educationDescription fontSecondary">Full-Stack Web Development</h3>
              <br />
              <h5 className="educationDescription text-white fontSecondary">November 2021 - Current</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-xl-4 universityOfNevada">
             <img className="educationImg" src="/images/University of Nevada, Reno.jpg" />
            </div>
            <div className="col-10 col-xl-8 mathGameProject my-auto mx-xxl-auto ps-xl-4">
              <h2 className="educationHeading colorPrimary fontSecondary mb-4">University of Nevada, Reno</h2>
              <h3 className="d-xl-flex text-white educationDescription fontSecondary">Reno, NV - Bachelor of Science in Finance. Minor in Economics</h3>
              <br />
              <h5 className="educationDescription text-white fontSecondary">January 2018 - August 2021</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-xl-4 deltaCollege">
            <img className="educationImg" src="/images/San Joaquin Delta College.jpg" />
            </div>
            <div className="col-10 col-xl-8 toDoListProject my-auto mx-xxl-auto ps-xl-4">
              <h2 className="educationHeading colorPrimary fontSecondary mb-4">San Joaquin Delta College</h2>
              <h3 className="d-xl-flex text-white educationDescription fontSecondary">Stockton, CA — Associates in Math and Science (AA-S)/Associates in Business Administration (AS-T)</h3>
              <br />
              <h5 className="educationDescription text-white fontSecondary">June 2015 - December 2017</h5>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Education;