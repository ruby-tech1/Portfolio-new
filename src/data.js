import quiz from "./assets/quiz.webp";
import ecommercee from "./assets/ecommerce.png";
import jobs from "./assets/jobs.png";
import shorti from "./assets/shorti.png";
import { nanoid } from "nanoid";

export const socials = [
  {
    id: nanoid(),
    href: "https://www.linkedin.com/in/rubytech",
    svg: "fa-brands fa-linkedin-in",
  },
  {
    id: nanoid(),
    href: "https://github.com/ruby-tech1",
    svg: "fa-brands fa-github",
  },
];

export const navLinks = [
  {
    id: nanoid(),
    href: "about",
    text: "about",
  },
  {
    id: nanoid(),
    href: "projects",
    text: "project",
  },
  {
    id: nanoid(),
    href: "contact",
    text: "contact",
  },
];

export const skills = [
  {
    id: nanoid(),
    icon: "fa-solid fa-palette",
    title: "graphic designer",
    text: "Proficiency in graphic design software including Canva, Adobe Photoshop, and Adobe Ilustrator to create logos, social media graphics, flyers, and other marketing materials",
  },
  {
    id: nanoid(),
    title: "front-end development",
    icon: "fa-solid fa-pen-nib",
    text: "As a skilled frontend developer, proficient in crafting responsive and interactive user interfaces using HTML5, CSS, vanilla JavaScript, Tailwind CSS, and React, delivering seamless and visually appealing web experiences.",
  },
  {
    id: nanoid(),
    icon: "fa-solid fa-code",
    title: "backend development",
    text: "On the server side, experience in building robust server-side applications using Node.js, Express, Java and SpringBoot, with proficiency in designing and implementing efficient databases with MongoDB and PostgreSQL for scalable and performant web solutions.",
  },
];

export const techs = [
  {
    id: nanoid(),
    icon: "fa-brands fa-react",
    text: "react js",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-node",
    text: "node js",
  },
  {
    id: nanoid(),
    icon: "",
    text: "mongodb",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-git-alt",
    text: "git",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-github",
    text: "github",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-html5",
    text: "html",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-css3",
    text: "css",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-square-js",
    text: "javascript",
  },
];

export const projects = [
  {
    id: nanoid(),
    name: "exam system",
    text: "A web application that allows user to set and attempt quiz.",
    image: quiz,
    code: "https://github.com/ruby-tech1/Exam-System",
    website: "https://exam-system-e83d232f0858.herokuapp.com/",
    tech: "react nodejs express mongodb tailwindcss",
  },
  {
    id: nanoid(),
    name: "jobster",
    text: "A web application that allows users or job seekers to manage job applications",
    image: jobs,
    code: "https://github.com/ruby-tech1/Jobs-Api",
    website: "https://jobs.v3ga.shop/",
    tech: "react nodejs expressjs mongodb",
  },
  {
    id: nanoid(),
    name: "e-commerce api",
    text: "The backend for an e-commerce web app including the api endpoints and other features",
    image: ecommercee,
    code: "https://github.com/ruby-tech1/Exam-System",
    website: "https://ecommerce-api01-1f7e97e065f9.herokuapp.com/",
    tech: "nodejs mongodb stripe express",
  },
  {
    id: nanoid(),
    name: "shorti",
    text: "This is a web application that allows users to shorten long urls",
    image: shorti,
    code: "https://github.com/ruby-tech1/shorti",
    website: "https://shorti-vga1.onrender.com/",
    tech: "react nodejs mongodb express",
  },
];

export const stats = [
  {
    id: nanoid(),
    number: 200,
    title: "linkedin connections",
  },
  {
    id: nanoid(),
    number: 10,
    title: "projects worked on",
  },
  {
    id: nanoid(),
    number: 3,
    title: "certifications",
  },
  {
    id: nanoid(),
    number: 2,
    title: "years experience",
  },
];

export const contacts = [
  {
    id: nanoid(),
    icon: "fa-solid fa-paper-plane",
    text: "send me a message",
    href: "https://wa.link/6tkxq1",
  },
  {
    id: nanoid(),
    icon: "fa-solid fa-envelope",
    text: "email me",
    href: "mailto:reubenalabi@gmail.com",
  },
  {
    id: nanoid(),
    icon: "fa-brands fa-linkedin",
    text: "linkedin",
    href: "https://www.linkedin.com/in/rubytech",
  },
];
