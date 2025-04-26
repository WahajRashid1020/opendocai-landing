import Image from "next/image";
import React from "react";

export type Testimonial = {
  caption: string;
  content: string;
  avatar: string;
  name: string;
  position: string;
  logo: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      style={{ cursor: "grab" }}
      className=" bg-basic    flex flex-col justify-center items-center p-8 mx-10 my-4  text-white text-center  rounded-2xl"
    >
      <h4 className="font-bold text-2xl md:text-3xl max-w-md mx-auto mb-6">
        {testimonial.caption}
      </h4>
      <h5 className="max-w-2xl text-sm mb-6">{testimonial.content}</h5>
      <Image
        width={100}
        height={100}
        alt="User Profile Picture"
        src={testimonial.avatar}
        className="w-24 h-24 aspect-square rounded-full object-cover object-center mb-4"
      />
      <div className="text-sm font-semibold">{testimonial.name}</div>
      <div className="text-sm font-semibold">{testimonial.position}</div>
      <Image
        className="h-10 w-auto mt-2"
        alt="Company Logo"
        src={testimonial.logo}
        width={100}
        height={100}
      />
    </div>
  );
}
