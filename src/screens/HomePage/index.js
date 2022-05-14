import React, { useEffect } from "react";
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollImage from "./components/ScrollImage/ScrollImage";
import PartnerCard from "./components/PartnerCard/PartnerCard";
import BulmaTimeline from "./components/Timeline/BulmaTimeline";
import TeamSection from "./components/TeamCard/TeamSection";
import RaritySection from "./components/Rarity/RaritySection";
import TimelineSection from "./components/Timeline/Timeline";
import FAQnew from "./components/FAQ/FAQnew";
import giraffe from '../../images/Jimmy.png';
import { Container } from "@material-ui/core";
import 'animate.css';
import Fade from 'react-reveal/Fade';

function HomePage() {

  return (
    <div>
      {/* landing section */}
      <section className="hero">
        <div className="hero-head">
          <NavBar/>
        </div>
        <div className="hero-body">
          <section className="container center-container">
            <div className="columns is-vcentered">
              <div className="colum is-half">
                <div className="container py-6">
                  <Fade top>
                    <p className="main-top">WELCOME TO THE GOOFY GIRAFFES!</p>
                    <p className="main-one">Giraffes in the</p>
                    <p className="main-two">Seven Kingdoms</p>
                  </Fade>
                  <Fade bottom>
                    <p className="paragraph mt-4">Goofy Giraffes are a set of animals that mutated to have human-like traits from your favorite TV Show while still maintaining the appearance of a Giraffe. 
                    </p>
                    <div className="columns mt-4">
                      <div className="column is-4">
                        <a className="button is-warning has-text-weight-bold p-5 px-6">
                          <span className="icon">
                            <i className="fab fa-discord"></i>
                          </span>
                          <span>Discord</span>
                        </a>
                      </div>
                      <div className="column">
                        <a className="button is-white is-outlined has-text-weight-bold p-5 px-6">
                          <span className="icon">
                            <i className="fab fa-twitter"></i>
                          </span>
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <Fade right>
                <div className="column is-half">
                    <figure className="image"> {/*animate__animated animate__pulse animate__slower animate__infinite*/}
                      <img className="main-image" src={giraffe}/>
                    </figure>
                </div>
              </Fade>
            </div>
          </section>
        </div>
      </section>

      {/* goofyverse section */}
      <section className="hero" id="goofyverse">
        <div className="hero-body">
          <div className="container center-container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <Fade bottom>
                  <p className="subtitle">ABOUT OUR PROJECT</p>
                  <p className="title-res yellow">Goofieverse</p>
                  <p className="paragraph">Goofy Giraffes are a set of animals that mutated to have human-like traits while 
                    still maintaining the appearance of a Giraffe. They take traits of characters of 
                    famous TV shows while infiltrating their universe to spread their kind.
                  </p>
                  <br/>
                  <p className="paragraph">It's everyone's fantasy to be a character of their favourite TV show. Heck, 
                    we act like we are part of it! With our goofy avatars, you'll feel like you actually 
                    are a part of it! Stay tuned and alert by joining our discord and following us on our socials! Exciting stuff awaits.
                  </p>
                </Fade>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div className="card-image">
                    {/* <figure className="image is-3by4">
                      <img src="https://media2.giphy.com/media/MdSVo8YEqmm2rxm5ME/200.gif" alt="Placeholder image"/>
                    </figure> */}
                    <ScrollImage/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* roadmap secgtion */}
      <section className="hero" id="roadmap">
        <div className="herobody">
          <div className="container has-text-centered my-6 center-container">
            <p className="subtitle">FIRST GEN COLLECTION</p>
            <p className="title-res yellow">Roadmap</p>
            <div className="has-text-left road-margin">
              <TimelineSection/>
            </div>
          </div>
        </div>
      </section>

      {/* partners secgtion */}
      <section className="hero" id="partners">
        <div className="herobody">
          <div className="container has-text-centered my-6 center-container">
            <p className="subtitle">ITS NOT JUST US</p>
            <p className="title-res yellow">Partners</p>
            <div className="container">
              <PartnerCard/>
            </div>
          </div>
        </div>
      </section>

      {/* rarity secgtion */}
      <section className="hero" id="rarity">
        <div className="herobody">
          <div className="container has-text-centered my-6 center-container">
            <p className="subtitle">TIP OF THE ICEBERG!</p>
            <p className="title-res yellow">Rarity</p>
            <div className="">
              <RaritySection/>
            </div>
          </div>
        </div>
      </section>

      {/* team secgtion */}
      <section className="hero" id="team">
        <div className="herobody">
          <div className="container has-text-centered my-6 center-container">
            <p className="subtitle">ROLES BEHIND THE SCENE</p>
            <p className="title-res yellow">Meet Team</p>
            <div className="container">
              <div className="columns is-multiline">
                <TeamSection/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq secgtion */}
      <section className="hero" id="faq">
        <div className="herobody">
          <div className="container has-text-centered my-6 center-container">
            <p className="subtitle">THINGS THAT YOU WANT TO KNOW</p>
            <p className="title-res yellow">Freaquently asked Questions</p>
            <div className="container has-text-left py-6 mt-6">
              <FAQnew/>
            </div>
          </div>
          <div className="container pb-6 center-container">
            <div className="columns is-vcentered">
              <div className="column is-half has-text-left has-text-centered-mobile">
                <p className="subtitle">DO YOU HAVE SOMETHING FOR US?</p>
                <p className="title-res">Contact Us</p>

                <div className="columns is-vcentered mt-4">
                  <div className="column is-1 has-text-left has-text-centered-mobile">
                    <div className="icon yellow m-4">
                      <i className="fa fa-envelope fa-3x"></i>  {/*fa-lg*/}
                    </div>
                  </div>
                  <div className="column has-text-left has-text-centered-mobile">
                    <div className="email-text mx-4">
                      info@goofygiraffes.io
                    </div>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <p className="email-text has-text-centered-mobile">
                    <div className="icon-text">
                      <div className="columns">
                        <div className="column is-2">
                          <div className="icon ml-3">
                            <i className="fa fa-envelope"></i> 
                          </div>
                        </div>
                        <div className="column">
                          <div className="">
                            info@goofygiraffes.io
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div> */}
              </div>
              <div className="column is-half has-text-right has-text-centered-mobile">
                <p className="subtitle">SUBSCRIBE FOR THE GG LATEST NEWS</p>
                <p className="title-res">Newsletter</p>

                <div className="field is-grouped mt-6">
                  <p className="control is-expanded">
                    <input className="input email-input" type="text" placeholder="Your e-mail address"/>
                  </p>
                  <p className="control">
                    <a className="button is-warning has-text-weight-bold px-4">
                      Submit
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot has-background-black mt-6">
          <Footer/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
