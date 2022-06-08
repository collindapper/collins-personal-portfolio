import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container experiencePage mt-xl-2 ">
      <div className="d-flex row mx-auto justify-content-center px-auto">

        <div className="col-12 col-xl-11">

          <div className="d-xxl-flex row experienceRow border-start my-4 rounded mt-xl-2 mx-auto">
          <h1 className="experienceHeading display-3 fontPrimary colorSecondary ps-4 text-start">Experience</h1>
            <div className="d-none d-xxl-flex col-xxl-4 pt-2 ps-4 my-auto currencyConverterProjectImg">
             <img className="experienceImg" src="/images/Amazon.jpg" />
            </div>
            <div className="col-12 col-xxl-8 currencyConverterProject my-auto mx-xxl-auto ps-4">
              <h2 className="experiencHeading colorPrimary fontSecondary mb-4">Amazon.com - Manager I, Operations</h2>
              <h5 className="d-xl-flex text-white experienceDescription fontSecondary">
                - Coach, manage, and develop a team of 200 Amazon associates<br/>
                - Communicate policies to my team and act as the primary information source for the team<br/>
                - maintaining compliance, consistency, and taking corrective action when needed<br/>
                - Create, manage, and support recognition programs<br/>
                - Support all safety programs and OSHA compliance to ensure a safe work environment
                for all associates<br/>
                - Ensure procedures are followed for building security and product loss prevention<br/>
                - Develop tools to track and analyze cost and production trends<br/>
                - Partner with the management team to establish and maintain quality control standards<br/>
                - Develop performance goals and objectives to achieve customer demand and ensure
                accuracy and quality</h5>
              <br />
              <h5 className="experienceDescription text-white fontSecondary">April 2021 - April 2022</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xxl-4 pt-2 ps-4 my-auto mathGameProjectImg">
             <img className="experienceImg" src="/images/Eagle Fitness.jpg" />
            </div>
            <div className="col-12 col-xxl-8 mathGameProject my-auto mx-xxl-auto ps-4">
              <h2 className="experiencHeading colorPrimary fontSecondary mb-4">Eagle Fitness - Membership Sales Specialist</h2>
              <h5 className="d-xl-flex text-white experienceDescription fontSecondary">
                - Develop sales strategy to increase membership agreements.<br/>
                - Train incoming sales representatives<br/>
                - Create monthly projections, based on historical data, to calculate increase or decrease in memberships.<br/>
                - Work with people to find a reasonable plan for them to commit to.<br/>
                - Motivate people to start/continue their fitness journey with us.</h5>
              <br />
              <h5 className="experienceDescription text-white fontSecondary">August 2018 - March 2020</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4 toDoListProjectImg">
            <img className="experienceImg" src="/images/harrahs.jpg" />
            </div>
            <div className="col-12 col-xxl-8 toDoListProject my-auto mx-xxl-auto ps-4">
              <h2 className="experiencHeading colorPrimary fontSecondary mb-4">Caesars Entertinment, Inc - Sales Representative</h2>
              <h5 className="d-xl-flex text-white experienceDescription fontSecondary">
                - Created a comfortable environment for guests to help aid them in the vacation experience.<br/>
                - Worked respectfully and productively internally with my fellow employees in order to keep the business running smooth.<br/>
                - Observed the needs of the guests and accommodate to their specific needs to keep the visit for the guests extraordinary.</h5>
              <br />
              <h5 className="experienceDescription text-white fontSecondary">March 2018 - August 2018</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4 toDoListProjectImg">
            <img className="experienceImg" src="/images/umigo.jpg" />
            </div>
            <div className="col-12 col-xxl-8 toDoListProject my-auto mx-xxl-auto ps-4">
              <h2 className="experiencHeading colorPrimary fontSecondary mb-4">Umigo Racing, Inc - Sales Representative</h2>
              <h5 className="d-xl-flex text-white experienceDescription fontSecondary">
                - Built a relationship with the customer, talked about the process, company safety rules, and showed them the proper procedure when racing <br/>
                - Helped the customer get an understanding of what is being sold. Listen to Customers wants and needs, assess their needs, give recommendation off my assessment.<br/>
                - Lead employees by example and get the job done with the company’s best interest in mind.</h5>
              <br />
              <h5 className="experienceDescription text-white fontSecondary">August 2017 - January 2018</h5>
              <br />
            </div>
          </div>

          <div className="d-xxl-flex row educationRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="d-none d-xxl-flex col-xl-4 pt-2 ps-4 toDoListProjectImg">
            <img className="experienceImg" src="/images/americas tire.jpg" />
            </div>
            <div className="col-12 col-xxl-8 toDoListProject my-auto mx-xxl-auto ps-4">
              <h2 className="experiencHeading colorPrimary fontSecondary mb-4">America's Tire, Inc - Tire Technician / Crew Chief</h2>
              <h5 className="d-xl-flex text-white experienceDescription fontSecondary">
                - Fulfilled the needs of the customers through friendly communication, and a hassle-free process to get them on the road in a timely manner <br/>
                - Assessed the needs of the customers to work with their price budget and time frame<br/>
                - Train employees on proper workflow, as well as, proper ethical guidelines when communicating with the customers.<br/>
                - Maintain proper workflow through efficient working, stocked inventory and constant communication among fellow employees</h5>
              <br />
              <h5 className="experienceDescription text-white fontSecondary">August 2016 - August 2017</h5>
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

export default Experience;