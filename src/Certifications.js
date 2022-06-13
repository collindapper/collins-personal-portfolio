import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container educationPage mt-xl-2 ">
      <div className="d-flex row mx-auto justify-content-center px-auto">

        <div className="col-12 col-xl-11">

          <div className="d-xxl-flex row certificationRow border-start my-4 rounded mt-xl-2 mx-auto">
          <h1 className="certificationHeading display-3 fontPrimary colorSecondary ps-4 text-start">Certifications</h1>
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4">
             <img className="certificationImg" src="/images/ReactJS Development Certification.jpg" />
            </div>
            <div className="col-12 col-xxl-8 altcademy my-auto mx-xxl-auto ps-4">
              <h2 className="certificationHeading colorPrimary fontSecondary mb-4">ReactJS Development</h2>
              <h5 className="certificationDescription text-white fontSecondary mt-4">June 2022</h5>
              <br />
              <a className="d-block certificationLink btn shadow-lg fontSecondary mt-2" type="button" href="./media/ReactJS Development Certification.pdf" target="_blank"><h5>Certification PDF</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row certificationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4">
             <img className="certificationImg" src="/images/Dynamic Website Development Certification.jpg" />
            </div>
            <div className="col-12 col-xxl-8 mathGameProject my-auto mx-xxl-auto ps-4">
              <h2 className="certificationHeading colorPrimary fontSecondary mb-4">Dynamic Website Development</h2>
              
              <h5 className="certificationDescription text-white fontSecondary">May 2022</h5>
              <br />
              <a className="d-block certificationLink btn shadow-lg fontSecondary mt-2" type="button" href="./media/Dynamic Website Development Certification.pdf" target="_blank"><h5>Certification PDF</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row certificationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4">
             <img className="certificationImg" src="/images/JavaScript Certification.jpg" />
            </div>
            <div className="col-12 col-xxl-8 mathGameProject my-auto mx-xxl-auto ps-4">
              <h2 className="certificationHeading colorPrimary fontSecondary mb-4">JavaScript Programming</h2>
              
              <h5 className="certificationDescription text-white fontSecondary">March 2022</h5>
              <br />
              <a className="d-block certificationLink btn shadow-lg fontSecondary mt-2" type="button" href="./media/JavaScript Certification.pdf" target="_blank"><h5>Certification PDF</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row certificationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4">
            <img className="certificationImg" src="/images/HTML CSS Certification.jpg" />
            </div>
            <div className="col-12 col-xxl-8 toDoListProject my-auto mx-xxl-auto ps-4">
              <h2 className="certificationHeading colorPrimary fontSecondary mb-4">HTML CSS Development</h2>
              
              <h5 className="certificationDescription text-white fontSecondary">March 2022</h5>
              <br />
              <a className="d-block certificationLink btn shadow-lg fontSecondary mt-2" type="button" href="./media/HTML CSS Certification.pdf" target="_blank"><h5>Certification PDF</h5></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Certifications;