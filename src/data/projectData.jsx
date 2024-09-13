import Movie from "../images/Movie-Discovery-App-HNG.resized.png";
import Recipe from "../images/Recipe-app.resized.png";
import Restaurant from "../images/Mia-s-Kitn.resized.png";
import Clearlink from "../images/ClearLink.resized.png";
import Cadence from "../images/Cadence-Store.png"
import Splitify from "../images/Splitify-dashboard.png"
import Spring from "../images/Home-SpringStrategyShot.png"
import Spring2 from "../images/Home-SpringStrategyPic.png"

// import Portfolio from "../images/Portfolio.resized.png"
// import Season from "../images/Gallery.resized.png";
// import Nature from "../images/Weather-Application.resized.png";

export const projects = [
  {
    id: 1,
    title: "Recipe App",
    img: Recipe,
    link: "https://recipe-app-three-kohl.vercel.app/",
    desc: "A recipe application that allows user search meals by categories and present ingredients and methods of cooking each meal.",
    stack: ["HTML", "TailwindCSS", "Typescript", "theMealDB"],
    src: "",
  },

  {
    id: 2,
    title: "Movie Discovery App",
    img: Movie,
    link: "https://movie-discovery-app-hng.vercel.app/",
    desc: "A movie discovery application, where user can discover top rated movies, see details about each one and search for a movie by title.",
    stack: ["React", "MUI", "Fetch API", "The Movie DB API"],
    src: "",
  },
  {
    id: 3,
    title: "Spring Strategy",
    img: Spring,
    img2: Spring2,
    link: "https://springstrategy.com.ng",
    desc: "A responsive website for a consulting firm.",
    stack: ["HTML, CSS, Vanilla Javascript "],
    src: "https://github.com/Hestia-Arc/spring-strategy.git",
    p1: "A responsive website for a consulting firm that conduct research to provide innovative ideas to their clients by analyze market trends, assess operational efficiency, or identify growth opportunities. ",

  },
  {
    id: 4,
    title: "ClearLink Landing page",
    img: Clearlink,
    link: "https://clearlink-alpha.vercel.app/",
    desc: "A landing page built for TalentSync project assessment.(Desktop view)",
    stack: ["React", "Material UI", "Vite"],
    src: "",
  },
  

  {
    id: 5,
    title: "LeCadence store",
    img: Cadence,
    link: "https://cadence-store.vercel.app/",
    desc: "A PERN e-commerce application ...(in development mode). ",
    stack: ["Nodejs, Express, PostgreSQL, Reactjs, Typescript, TailwindCSS, ReduxToolkits, Framer-motion, Firebase"],
    src: "https://github.com/Hestia-Arc/cadence-store.git",
  },

  {
    id: 6,
    title: "Splitify",
    img: Splitify,
    link: "https://splitify-frontend.onrender.com",
    desc: "A MERN stack expense splitting application. It has a landing page and a dashboard. ",
    stack: ["React.js, TailwindCSS, ReduxToolkits, Node.js, Express, MongoDB, Axios"],
    src: "https://github.com/Hestia-Arc/splitify_frontend.git",
    api: "https://github.com/Hestia-Arc/splitify_backend.git",
    date: "June 2024",
    p1: "This is a group project from Shecode Africa X FedEx academy cohort 1. I was in the backend development track and gained a lot of valuable experience working on a MERN full-stack application for the first time.",
    p2: "While I handled the backend operations, I also worked closely with the frontend developer to manage state and integrate the API, since I have experience in frontend development.  "
  },
  {
    id: 7,
    title: "Restaurant Landing page",
    img: Restaurant,
    link: "https://mias-restuarant.vercel.app/",
    desc: "A landing page for a restaurant business that provide information about the it and market its products.(...in dev mode)",
    stack: ["React", "Material UI", "Vite"],
    src: "",
  },
  
];
// ===================================================================

// {
//   id: 3,
//   title: "Weather App",
//   img: Nature,
//   link: "https://natures-forecast.netlify.app/",
//   desc: "An application which shows the weather information (temperature, humidity etc) of a location. And predict the conditions of the atmosphere for a given location and time.",
//   stack: ['React','Bootstrap', 'Axios', 'Open Weather API'],
//   src: "",
// },

// {
//   id: 6,
//   title: "Season Gallery",
//   img: Season,
//   link: "https://season-gallery.vercel.app/gallery",
//   desc: "A responsive image gallery that showcases collection of images about the four seasons around the year.",
//   stack: ['React', 'Material UI', 'SortableJS'],
//   src: "",
// },

// {
//   id: 7,
//   title: "Portfolio",
//   img: Portfolio,
//   link: "https://season-gallery.vercel.app/gallery",
//   desc: "A responsive portfolio",
//   stack: ["React", "MUI"],
//   src: "",
// },

// {
//   id: 9,
//   title: "Weather App",
//   img: Nature,
//   link: "https://natures-forecast.netlify.app/",
//   desc: "An application which shows the weather information (temperature, humidity etc) of a location. And predict the conditions of the atmosphere for a given location and time.",
//   stack: [],
//   src: "",
// },
// {
//     id: 4,
//     title: "",
//     img: "",
//     link: "",
//     desc: "",
//     stack: [],
//     src: "",
// },
