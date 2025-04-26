"use client";

import Slider from "react-slick";
import TestimonialCard, { Testimonial } from "./testimonial-card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
const testimonials: Testimonial[] = [
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
  {
    caption: "A collaborative Knowledge Experience",
    content:
      "With OpenDocAI, creating and consuming knowledge has become part of organization day to day.",
    avatar: "/assets/testimonials/avatar1.jpeg",
    name: "Adi Polakiewicz",
    position: "Head of Product Research & Development",
    logo: "/opendoc_logo.png",
  },
];

const Arrow = () => {
  return (
    <span className="rounded-full bg-basic text-white w-6 h-6">
      <ArrowRightCircleIcon className="text-white w-5 h-5" />
    </span>
  );
};

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

    dots: true,
  };

  return (
    <div className="w-full mt-12">
      <h2 className="mb-12 text-2xl md:text-4xl font-bold font-heading text-center tracking-px-n leading-tight">
        Trusted by teams of all Sizes
      </h2>
      <Slider
        className="max-w-2xl mx-auto 
    text-black"
        {...settings}
      >
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} />
        ))}
      </Slider>
    </div>
  );
}
