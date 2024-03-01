/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm an aspiring <span className="font-medium">Software Engineer</span>{" "}
        with a strong passion for{" "}
        <span className="font-medium">
          Artificial Intelligence and Machine Learning
        </span>
        . My background lies in creating reliable and efficient software
        solutions and I'm particularly motivated by the potential of AI and MLto
        transform various industries and improve our daily lives.
      </p>

      <p>
        Beyond coding, I'm constantly{" "}
        <span className="font-medium">
          learning and staying informed about the latest advancements in AI and
          ML
        </span>
        . My problem-solving skills and lifelong learning mentality make me
        thrive on challenges. Whether it's refining a complex language model or
        building groundbreaking applications, I'm eager to contribute to the AI
        landscape and help shape a{" "}
        <span className="font-medium">
          future that's both smarter and more connected
        </span>
        .
      </p>
    </motion.section>
  );
}

export default About;
