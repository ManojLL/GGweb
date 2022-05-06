import React, { Component } from "react";
import Slider from "react-slick";
import './Rarity.css';
import RarityCard from "./RarityCard";

export default class RaritySection extends Component {
  render() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],

      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
            <div>
                <RarityCard/>
            </div>
          </Slider>
        </div>
      );
  }
}