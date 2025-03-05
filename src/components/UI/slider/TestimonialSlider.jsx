import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="rounded">
        {" "}
        <div className=" m-2 p-2 rounded shadow-sm">
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis atque, quam minus totam maiores laborum! Impedit
            consectetur illum aliquid odit. Odit dolore ipsum quod debitis
            nostrum necessitatibus quis dolorem quas!"
          </p>
          <div className=" slider__content d-flex align-items-center gap-3 ">
            <img src={ava01} alt="avatar" className=" rounded" />
            <h6>Mohammad Somon Sikder</h6>
          </div>
        </div>
      </div>

      <div className="rounded">
        <div className=" m-2 p-2 rounded shadow-sm">
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis atque, quam minus totam maiores laborum! Impedit
            consectetur illum aliquid odit. Odit dolore ipsum quod debitis
            nostrum necessitatibus quis dolorem quas!"
          </p>
          <div className="slider__content d-flex align-items-center gap-3 ">
            <img src={ava02} alt="avatar" className=" rounded" />
            <h6>Dua Lipa</h6>
          </div>
        </div>
      </div>
      <div className="rounded">
        <div className=" m-2 p-2 rounded shadow-sm">
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis atque, quam minus totam maiores laborum! Impedit
            consectetur illum aliquid odit. Odit dolore ipsum quod debitis
            nostrum necessitatibus quis dolorem quas!"
          </p>
          <div className="slider__content d-flex align-items-center gap-3 ">
            <img src={ava03} alt="avatar" className=" rounded" />
            <h6>Farid Ahmed Shimul</h6>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
