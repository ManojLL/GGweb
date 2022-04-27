import React from "react";
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PartnerCard from "./components/PartnerCard/PartnerCard";
import TeamCard from "./components/TeamCard/TeamCard";
import RaritySection from "./components/Rarity/RaritySection";
import FAQ from "./components/FAQ/FAQ";
import giraffe from '../../images/giraffe.png';
import { Container } from "@material-ui/core";

function HomePage() {
  return (
    <div>
      {/* landing section */}
      <section className="hero is-fullheight">
        <div className="hero-head">
          <NavBar/>
        </div>
        <div className="hero-body">
          <section className="container">
            <div className="columns is-vcentered">
              <div className="colum is-half p-6">
                <div className="container py-6">
                  <p className="main-top">WELCOME TO THE GOOFY GIRAFFES!</p>
                  <p className="main-one">Giraffes in the</p>
                  <p className="main-two">Seven Kingdoms</p>
                  <p className="main-para">Goofy Giraffes are a set of animals that mutated to have human-like 
                    traits while still maintaining the appearance of a Giraffe. They take 
                    traits of characters of famous TV shows while infiltrating their universe to spread their kind.
                  </p>
                  <div className="buttons mt-6">
                    <a className="button is-warning has-text-weight-bold p-5">
                      <span class="icon">
                        <i class="fab fa-discord"></i>
                      </span>
                      <span>Discord</span>
                    </a>
                    <a className="button is-white is-outlined ml-4 has-text-weight-bold p-5">
                      <span class="icon">
                        <i class="fab fa-twitter"></i>
                      </span>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <figure class="image">
                  <img src={giraffe}/>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* goofyverse section */}
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half p-6">
                <p className="subtitle">ABOUT OUR PROJECT</p>
                <p className="title">Goofieverse</p>
                <p>Goofy Giraffes are a set of animals that mutated to have human-like traits while 
                  still maintaining the appearance of a Giraffe. They take traits of characters of 
                  famous TV shows while infiltrating their universe to spread their kind.
                </p>
                <br/>
                <p>It's everyone's fantasy to be a character of their favourite TV show. Heck, 
                  we act like we are part of it! With our goofy avatars, you'll feel like you actually 
                  are a part of it! Stay tuned and alert by joining our discord and following us on our socials! Exciting stuff awaits.
                </p>
              </div>
              <div className="column is-half p-6">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-3by4">
                      <img src="https://media2.giphy.com/media/MdSVo8YEqmm2rxm5ME/200.gif" alt="Placeholder image"/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* roadmap secgtion */}
      <section className="hero">
        <div className="herobody">
          <div className="container has-text-centered my-6">
            <p className="subtitle">FIRST GEN COLLECTION</p>
            <p className="title">Roadmap</p>
            <div>
              {/* timeline component */}
            </div>
          </div>
        </div>
      </section>

      {/* partners secgtion */}
      <section className="hero">
        <div className="herobody">
          <div className="container has-text-centered my-6">
            <p className="subtitle">ITS NOT JUST US</p>
            <p className="title">Partners</p>
            <div className="container">
              <PartnerCard/>
            </div>
          </div>
        </div>
      </section>

      {/* rarity secgtion */}
      <section className="hero">
        <div className="herobody">
          <div className="container has-text-centered my-6">
            <p className="subtitle">TIP OF THE ICEBERG!</p>
            <p className="title">Rarity</p>
            <div className="container m-6">
              <RaritySection/>
            </div>
          </div>
        </div>
      </section>

      {/* theam secgtion */}
      <section className="hero">
        <div className="herobody">
          <div className="container has-text-centered my-6">
            <p className="subtitle">ROLES BEHIND THE SCENE</p>
            <p className="title">Meet Team</p>
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="container is-centered">
                    <TeamCard/>
                  </div>
                </div>
                <div className="column is-one-third">
                  <TeamCard/>
                </div>
                <div className="column is-one-third">
                  <TeamCard/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-third">
                  <div className="container is-centered">
                    <TeamCard/>
                  </div>
                </div>
                <div className="column is-one-third">
                  <TeamCard/>
                </div>
                <div className="column is-one-third">
                  <TeamCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq secgtion */}
      <section className="hero">
        <div className="herobody">
          <div className="container has-text-centered my-6">
            <p className="subtitle">THINGS THAT YOU WANT TO KNOW</p>
            <p className="title">Freaquently asked Questions</p>
            <div className="container p-6 mt-6">
              <FAQ/>
              <FAQ/>
              <FAQ/>
              <FAQ/>
              <FAQ/>
            </div>
          </div>
          <div className="container px-6 pb-6">
            <div className="columns is-vcentered">
              <div className="column is-half has-text-left has-text-centered-mobile">
                <p className="subtitle">DO YOU HAVE SOMETHING FOR US?</p>
                <p className="title">Contact Us</p>

                <div className="ml-3 mt-6">
                  <p className="email-text">
                    <span className="icon-text">
                      <span className="icon mr-5">
                        <i class="fa fa-envelope fa-lg"></i>
                      </span>
                    <span>
                      info@goofygiraffes.io</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-half has-text-right has-text-centered-mobile">
                <p className="subtitle">SUBSCRIBE FOR THE GG LATEST NEWS</p>
                <p className="title">Newsletter</p>

                <div class="field is-grouped ml-6 mt-6">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Your e-mail address"/>
                  </p>
                  <p class="control">
                    <a class="button is-warning has-text-weight-bold">
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
