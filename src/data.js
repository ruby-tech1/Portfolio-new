import quiz from "./assets/quiz.webp";
import ecommercee from "./assets/ecommerce.png";
import jobs from "./assets/jobs.png";

export const socials = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/rubytech",
    svg: "fa-brands fa-linkedin-in",
  },
  {
    id: 2,
    href: "https://github.com/ruby-tech1",
    svg: "fa-brands fa-github",
  },
];

export const navLinks = [
  {
    id: 1,
    href: "about",
    text: "about",
  },
  {
    id: 2,
    href: "projects",
    text: "project",
  },
  {
    id: 3,
    href: "contact",
    text: "contact",
  },
];

export const skills = [
  {
    id: 1,
    icon: "fa-solid fa-palette",
    title: "graphic designer",
    text: "Proficiency in graphic design software including Canva, Adobe Photoshop, and Adobe Ilustrator to create logos, social media graphics, flyers, and other marketing materials",
  },
  {
    id: 2,
    title: "front-end development",
    icon: "fa-solid fa-pen-nib",
    text: "As a skilled frontend developer, proficient in crafting responsive and interactive user interfaces using HTML5, CSS, vanilla JavaScript, Tailwind CSS, and React, delivering seamless and visually appealing web experiences.",
  },
  {
    id: 3,
    icon: "fa-solid fa-code",
    title: "backend development",
    text: "On the server side, experience in building robust server-side applications using Node.js and Express, with proficiency in designing and implementing efficient databases with MongoDB for scalable and performant web solutions.",
  },
];

export const techs = [
  {
    id: 1,
    icon: "fa-brands fa-react",
    text: "react js",
  },
  {
    id: 2,
    icon: "fa-brands fa-node",
    text: "node js",
  },
  {
    id: 3,
    icon: "",
    text: "mongodb",
  },
  {
    id: 4,
    icon: "fa-brands fa-git-alt",
    text: "git",
  },
  {
    id: 5,
    icon: "fa-brands fa-github",
    text: "github",
  },
  {
    id: 6,
    icon: "fa-brands fa-html5",
    text: "html",
  },
  {
    id: 7,
    icon: "fa-brands fa-css3",
    text: "css",
  },
  {
    id: 8,
    icon: "fa-brands fa-square-js",
    text: "javascript",
  },
];

export const projects = [
  {
    id: 1,
    name: "exam system",
    text: "A web application that allows user to set and attempt quiz.",
    image: quiz,
    code: "https://github.com/ruby-tech1/Exam-System",
    website: "https://exam-system-e83d232f0858.herokuapp.com/",
    tech: "react nodejs express mongodb tailwindcss",
  },
  {
    id: 2,
    name: "jobster",
    text: "A web application that allows users or job seekers to manage job applications",
    image: jobs,
    code: "https://github.com/ruby-tech1/Jobs-Api",
    website: "https://jobs.v3ga.shop/",
    tech: "react nodejs expressjs mongodb",
  },
  {
    id: 3,
    name: "e-commerce api",
    text: "The backend for an e-commerce web app including the api endpoints and other features",
    image: ecommercee,
    code: "https://github.com/ruby-tech1/Exam-System",
    website: "https://ecommerce-api01-1f7e97e065f9.herokuapp.com/",
    tech: "nodejs mongodb stripe express",
  },
];

export const stats = [
  {
    id: 1,
    number: 100,
    title: "linkedin connections",
  },
  {
    id: 2,
    number: 10,
    title: "projects worked on",
  },
  {
    id: 3,
    number: 3,
    title: "certifications",
  },
  {
    id: 4,
    number: 1,
    title: "years experience",
  },
];

export const contacts = [
  {
    id: 1,
    icon: "fa-solid fa-paper-plane",
    text: "send me a message",
    href: "https://wa.link/6tkxq1",
  },
  {
    id: 2,
    icon: "fa-solid fa-envelope",
    text: "email me",
    href: "mailto:reubenalabi@gmail.com",
  },
  {
    id: 3,
    icon: "fa-brands fa-linkedin",
    text: "linkedin",
    href: "https://www.linkedin.com/in/rubytech",
  },
];
