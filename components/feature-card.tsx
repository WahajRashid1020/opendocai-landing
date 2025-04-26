"use client";

import React from "react";
import { cn } from "./utils";
import { RevealWrapper } from "next-reveal";

type FeatureCard = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  image,
  className,
}: FeatureCard) {
  return (
    <div
      className={cn(
        "border border-gray-300 rounded-lg p-5 md:p-10 max-w-lg",
        className
      )}
    >
      <img src={image} className="w-full" />
      <RevealWrapper>
        <h3 className="text-2xl font-bold">{title}</h3>
      </RevealWrapper>
      <RevealWrapper>
        <p className="text-lg">{description}</p>
      </RevealWrapper>
    </div>
  );
}
