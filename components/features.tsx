"use client";

import { cn } from "./utils";
import FeatureCard from "./feature-card";
import { RevealList, RevealWrapper } from "next-reveal";
import React from "react";

type Feature = {
  heading: string;
  items: string[];
  media: any;
  invert?: boolean;
};

function Feature({ heading, items, media, invert = false }: Feature) {
  return (
    <section
      className="relative py-12 
     overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div
          className={cn("flex flex-wrap items-center -m-8", {
            "flex-row-reverse": invert,
          })}
        >
          <div className="w-full md:w-1/2 p-8">
            <RevealWrapper>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                {heading}
              </h2>
            </RevealWrapper>

            <ul>
              <RevealList interval={60} delay={500}>
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="font-sans text-xl my-3 dark:text-gray-300 text-gray-900 leading-relaxed md:max-w-lg"
                  >
                    {item}
                  </div>
                ))}
              </RevealList>
            </ul>
          </div>
          <div
            className={cn(
              "w-full h-full md:w-1/2 p-8 justify-center flex items-center",
              {
                "md:justify-start": invert,
                "md:justify-end": !invert,
              }
            )}
          >
            <RevealWrapper
              origin={invert ? "left" : "right"}
              delay={100}
              duration={750}
              distance="400px"
            >
              {media}
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  const features: Feature[] = [
    {
      heading: "One-prompt Workflows",
      items: [
        "Automate data workflows with a simple prompt, powered by generative AI",
        "Simply describe your task and let AI generate and execute the actions.",
        "Intuitive user interface for tailoring steps according to your preferences.",
        "Streamline repetitive tasks with custom automation solutions.",
      ],
      media: (
        <img
          className="transform hover:-translate-y-12 transition ease-in-out duration-1000 h-auto max-w-[30rem]"
          src="/assets/features/one-prompt-workflows.png"
        />
      ),
    },
    {
      heading: "Reusable Processes",
      invert: true,
      items: [
        "Provide clear AI instructions for company-wide use.",
        "Direct AI to streamline your process.",
        "Share and collaborate on workflows effortlessly.",
        "Access a collection of ready-made workflows for faster development.",
        "Integrate AI tools with business strategies and validations.",
      ],
      media: (
        <img
          className="transform hover:-translate-y-12 transition ease-in-out duration-1000 h-auto max-w-[30rem]"
          src="/assets/features/reusable-processes.png"
        />
      ),
    },
    {
      heading: "Chat your way to Data Insights",
      items: [
        "Instantly transform your data into actionable insights - no training or data literacy skills required.",
        "Simply ask in plain English to query, filter, and bring your data to life.",
        "Build ML solutions just by asking. Custom analytics, ML libraries, training, visualizations, etc.",
      ],
      media: (
        <img
          className="transform hover:-translate-y-12 transition ease-in-out duration-1000 h-auto max-w-[30rem]"
          src="/assets/features/chat-your-way.gif"
        />
      ),
    },
  ];

  return (
    <>
      {features.map((feature, idx) => (
        <Feature key={idx} {...feature} />
      ))}
      <section className="container mx-auto flex gap-4 md:gap-12 flex-col md:flex-row p-2">
        <FeatureCard
          className="max-w-full md:w-1/2 w-full"
          image="/assets/features/built-in-connections.png"
          title="Built-in connections"
          description="Easily connect your databases, PostgreSQL, MySQL, SnowFlake, Amazon redshift, BIG Query (More coming soon)."
        />
        <FeatureCard
          className="max-w-full md:w-1/2 w-full"
          image="/assets/features/work-with-any-data.png"
          title="Built-in connections"
          description="Easily connect your databases, PostgreSQL, MySQL, SnowFlake, Amazon redshift, BIG Query (More coming soon)."
        />
      </section>
    </>
  );
}
