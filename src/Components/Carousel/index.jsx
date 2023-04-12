import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import PortfolioCard from "../PortfolioCard";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 825,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel">
        <Slider {...settings} className="d-flex justify-content-between py-5">
          <PortfolioCard
            img="./Images/lime.png"
            title="Lime Technologies"
            field="WEB DEVELOPMENT"
            desc="
            This software company provides innovative solutions that helps businesses automate their processes"
            tag1="UI/UX"
            tag2="React Js"
          />
          <PortfolioCard
            img="./Images/portfolio-1.jpg"
            title="Food App"
            field="WEB DEVELOPMENT"
            desc="With this system, you can manage your restaurant's menu, recipes, customers, orders, and more."
            tag1="UI/UX"
            tag2="Laravel"
          />
          <PortfolioCard
            img="./Images/bano.jpg"
            title="Bano Live"
            field="APP DEVELOPMENT"
            desc="A social app that allows users to connect with one another, stream videos and play games."
            tag1="UI/UX"
            tag2="React Native"
          />
          <PortfolioCard
            img="./Images/albredy.jpg"
            title="Albredy"
            field="APP DEVELOPMENT"
            desc="With our easy-to-use interface, you'll be able to find the perfect food for any animal."
            tag1="UI/UX"
            tag2="React Native"
          />
        </Slider>
      </div>
    );
  }
}
