import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container projectsPage mt-xl-2 ">
      <div className="d-flex row mx-auto justify-content-center px-auto">

        <div className="col-12 col-xl-11">

          <div className="d-xxl-flex row projectRow border-start mb-4 my-xl-4 rounded mt-xl-2 mx-auto">
          <h1 className="projectsHeading display-3 fontPrimary colorSecondary ps-4 text-start">Projects</h1>
            <div className="col-12 col-xxl-4 pt-2 ps-4 currencyConverterProjectImg">
             <img className="projectsImg" src="/images/Currency Converter.jpg" />
            </div>
            <div className="col-12 col-xxl-8 currencyConverterProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Currency Converter</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Intuitive and extremely user friendly currency converter application that helps a user convert any input amount from a selected base currency to a selected converted currency.  Along with this tool, there is an additional page to input a currency amount and select a base currency and see the conversions to all other 33 currencies</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | Dynamic Website | API | ReactJS</h5>
              <br />
              <a className="d-block projectLink btn shadow-lg fontSecondary" type="button" href="https://collins-currency-converter.herokuapp.com/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-currency-converter" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-xl-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 currencyConverterProjectImg">
             <img className="projectsImg" src="/images/movie finder.jpg" />
            </div>
            <div className="col-12 col-xxl-8 currencyConverterProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Movie Finder</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Interested in finding more information about your favorite movie or show? This movie finder will show you loads of information about your searches, such as, release date, plot, poster, and imdb ratings!</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | Dynamic Website | API | ReactJS</h5>
              <br />
              <a className="d-block projectLink btn shadow-lg fontSecondary " type="button" href="https://collins-movie-finder-2.herokuapp.com/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/movie-finder-2" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 mathGameProjectImg">
             <img className="projectsImg" src="/images/10 sec math game.jpg" />
            </div>
            <div className="col-12 col-xxl-8 mathGameProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">10 Second Math Game</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">A game where the user needs to input the correct answer to a basic arithmetic equation. Such as 5 + 10. However, there is a time limit of 10 seconds for which the user can input the correct answer and progress to the next question.  If the user runs out of time, the game ends. If the user makes a correct guess, an additional 1 second is added to the available time.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | JQuery | Dynamic Website</h5>
              <br />
              <a className="d-block projectLink btn  shadow-lg fontSecondary" type="button" href="https://collins-10-second-math-game.netlify.app" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-10-second-math-game" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 toDoListProjectImg">
            <img className="projectsImg" src="/images/API To Do List.jpg" />
            </div>
            <div className="col-12 col-xxl-8 toDoListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">API To Do List</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">This "To Do List" web application is connected to a ATDAPI service. It was created to have persistent data so that every time you visit the page, the list of tasks is the same as you left it.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | JQuery | AJAX | API</h5>
              <br />
              <a className="d-block projectLink btn  shadow-lg fontSecondary" type="button" href="https://collins-api-to-do-list.netlify.app/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-api-to-do-list" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 shoppingListProjectImg">
            <img className="projectsImg" src="/images/Shopping List.jpg" />
            </div>
            <div className="col-12 col-xxl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Dynamic Shopping List</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Ever wondering just about how much your shopping bill will be? With this application, you are allowed the freedom to create an item, add its price, and quantity to calculate total price for that item, as well as, the total of all items you have added.  This dynamic shopping list was created with JQuery to reduce HTML coding and build applications of all types using primarily JavaScript.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | JQuery </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-jquery-shopping-list.netlify.app/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-shopping-list" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 blackjackProjectImg">
            <img className="projectsImg" src="/images/BlackJack Game.jpg" />
            </div>
            <div className="col-12 col-xxl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">BlackJack Browser Game</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Want to prepare yourself for some card games at the casino this weekend? Come practice your game with this BlackJack browser game! The goal is simple, beat the dealer...</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript | JQuery </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-blackjack-game.netlify.app/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-blackjack-game" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 rockPaperScissorsProjectImg">
            <img className="projectsImg" src="/images/Rock Paper Scissors Game.jpg" />
            </div>
            <div className="col-12 col-xl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Rock Paper Scissors Game</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Can you beat the computer in a game of Rock, Paper, Scissors ?  Try this game here and play head-to-head or best of 3!</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | JavaScript  </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-rock-paper-scissors-game.netlify.app/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-rock-paper-scissors-game" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 personalPortfolioProjectImg">
            <img className="projectsImg" src="/images/Portfolio Screenshot.jpg" />
            </div>
            <div className="col-12 col-xl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Personal Portfolio 1st Edition</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Original design of my personal website.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5 | ReactJS </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-personal-portfolio.netlify.app/" target="_blank"><h5>Live Project</h5></a>
              <a className="d-block projectLink btn shadow-lg fontSecondary mt-2" type="button" href="https://github.com/collindapper/collins-first-personal-portfolio" target="_blank"><h5>GitHub Repo</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 airbnbNewsProjectImg">
            <img className="projectsImg" src="/images/Airbnb News.jpg" />
            </div>
            <div className="col-12 col-xxl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Airbnb News Webpage</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Personal adaptation of the Airbnb News Webpage.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v5  </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-airbnb-news-clone.netlify.app/" target="_blank"><h5>Live Project</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 airbnbBookingProjectImg">
            <img className="projectsImg" src="/images/Airbnb Booking.jpg" />
            </div>
            <div className="col-12 col-xxl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Airbnb Booking Webpage</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Personal adaptation of the Airbnb Booking Webpage.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v4  </h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-airbnb-clone.netlify.app/" target="_blank"><h5>Live Project</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 newsweekProjectImg">
            <img className="projectsImg" src="/images/Newsweek Clone.jpg" />
            </div>
            <div className="col-12 col-xl-8 shoppingListProject my-auto mx--xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Newsweek Webpage</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Personal adaptation of the Newsweek Webpage.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v4  </h5>
              <br />
              <a className="d-block projectLink btn shadow fontSecondary" type="button" href="https://collins-newsweek-clone.netlify.app/" target="_blank"><h5>Live Project</h5></a>
            </div>
          </div>

          <div className="d-xxl-flex row projectRow border-start my-4 rounded mt-xl-2 mx-auto">
            <div className="col-12 col-xxl-4 pt-2 ps-4 appleProjectImg">
            <img className="projectsImg" src="/images/Apple Clone.jpg" />
            </div>
            <div className="col-12 col-xl-8 shoppingListProject my-auto mx-xl-auto ps-4 mt-2 mt-xl-0">
              <h2 className="projectHeading colorPrimary fontSecondary">Apple Webpage</h2>
              <h5 className="d-none d-xl-flex text-white projectDescription fontSecondary">Personal adaptation of the Apple Store Webpage.</h5>
              <br />
              <h5 className="projectDescription text-white fontSecondary">HTML | CSS | Bootstrap v4</h5>
              <br />
              <a className="d-block projectLink btn  shadow fontSecondary" type="button" href="https://collins-apple-clone.netlify.app/" target="_blank"><h5>Live Project</h5></a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Projects;