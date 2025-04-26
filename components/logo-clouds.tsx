"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function LogoClouds() {
  const logos = [
    "/assets/logos/logo-xxl.png",
    "/assets/logos/logo-xxl2.png",
    "/assets/logos/logo-xxl3.png",
  ];

  return (
    <section className="pt-16 pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-5 text-2xl md:text-4xl font-bold font-heading text-center tracking-px-n leading-tight">
          Trusted by teams of all Sizes
        </h2>
        <div className="flex flex-wrap items-center">
          <Marquee className="mt-12" autoFill>
            {logos.map((path, idx) => (
              <img
                key={idx}
                className="h-12 w-auto aspect-auto mx-4"
                src={path}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
