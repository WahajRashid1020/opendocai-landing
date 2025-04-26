"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <Typewriter
      cursor
      cursorBlinking
      loop={0}
      typeSpeed={150}
      deleteSpeed={150}
      delaySpeed={2000}
      words={["Workflows", "Analytics", "Automation", "Q&A", "Visualization"]}
    />
  );
}
