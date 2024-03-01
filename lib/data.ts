import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import invCalcImg from "@/public/investment-calculator.png";
import reactEssImg from "@/public/react-essentials.png";
import tictactoeImg from "@/public/tic-tac-toe.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Generative AI Intern",
    location: "Wipro, Bangalore",
    description:
      "Applying my knowledge to practice at Wipro as a full time Intern for 5 months, I worked on building software solutions using powerful Generative AI technologies such as Google PaLM2 LLMs and deployed applications in the Google Cloud Platform. I've built strong foundational knowledge on LLMs and discovered multiple use cases where Generative AI can be used effectively to bring modern solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "BTech CSE with specialization in AI and ML",
    location: "VIT Chennai, India",
    description:
      "I pursued the knowledge that a computer science degree has to offer. I learnt Computer Science theory, modern practices when it comes to software engineering and also built a deep foundational knowledge in Artificial Intelligence and Machine Learning theory",
    icon: React.createElement(LuGraduationCap),
    date: "2021-25",
  },
  {
    title: "The beginning of my coding journey",
    location: "Lemer Public School, Thriprayar",
    description:
      "Wrote my first line of real code in 11th grade and began my journey into the tech world.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "Investment Calculator",
    description:
      "A simple React web application that lets user calculate the return on financial investments made.",
    tags: ["React", "Javascript", "CSS"],
    imageUrl: invCalcImg,
    url: "https://anurag-investment-calculator.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "I built a Tic Tac Toe game using React JS.",
    tags: ["React", "Javascript", "CSS"],
    imageUrl: tictactoeImg,
    url: "https://anuragvelekat-tic-tac-toe.vercel.app/",
  },
  {
    title: "React Essentials",
    description:
      "I built a React web application that explains the fundamental concepts of React JS including Components, Props, JSX and State while mastering the fundamentals of React JS.",
    tags: ["React", "Javascript", "CSS"],
    imageUrl: reactEssImg,
    url: "https://react-essentials-nine.vercel.app/",
  },
] as const;

export const skillsData = [
  "Python",
  "Pytorch",
  "Tensorflow",
  "LangChain",
  "NLP",
  "Computer Vision",
  "OpenCV",
  "Numpy",
  "Pandas",
  "Sci-kit Learn",
  "FastAPI",
  "Flask",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
] as const;
