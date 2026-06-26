import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import adwareImg from "../images/adware.png";
import CanvoImg from "../images/Canvo.png";
import HairImg from "../images/Hair.png";
import HairStyleImg from "../images/HairStyle.png";
import SolarGenImg from "../images/SolarGen.png";

const projects = [
  {
    title: "Bridging Local Sellers and Buyers Platform.",
    description:
      "It helps people easily find nearby stores and available products that are hard to locate offline.",
    // image: taskflowImg,
    tech: ["React","Express", "Node", "MongoDB"],
    github: "https://github.com/HarshGakare/BLSB",
    live: "https://github.com/HarshGakare/BLSB",
  },
  {
    title: "Online Bookstore Application",
    description:
      "Created a responsive online bookstore that allows users browse, search, and explore books by genre",
    // image: shopsphereImg,
    tech: ["React","Express", "Node", "MongoDB"],
    github: "https://github.com/HarshGakare/shopsphere",
    live: "https://shopsphere.vercel.app",
  },
  {
    title: "Merlin Fashion E-Commerce Website.",
    description:
      "E-commerce Website is an online platform designed to offer a wide range of trendy clothing and accessories for men, women, and kids.",
    // image: designcraftImg,
    tech: ["React","Express", "Node", "MongoDB"],
    github: "https://github.com/HarshGakare/designcraft",
    live: "https://designcraft.vercel.app",
  },
   {
    title: "Contact Management System",
    description:
      "A contact management application developed in C++ that allows users to add, update, search, and delete contact information efficiently.",
    tech: ["C++"],
    github: "https://github.com/HarshGakare/Contact_Management",
    live: "",
    // image: contactImg,
  },

  {
    title: "Learning Management System (Internship Project)",
    description:
      "A Learning Management System developed during internship using React. It provides course management, student interaction, and educational content features.",
    tech: ["React"],
    github: "https://github.com/HarshGakare/LMS",
    live: "",
    // image: lmsImg,
  },

  {
    title: "To-Do List Application",
    description:
      "A responsive task management application built with React that allows users to add, edit, complete, and remove tasks.",
    tech: ["React", "JSX"],
    github: "https://github.com/HarshGakare/To-do-list",
    live: "",
    // image: todoImg,
  },

  {
    title: "Spotify 2.0 Clone",
    description:
      "A Spotify-inspired music streaming interface built with React. It features modern UI components and responsive music player layouts.",
    tech: ["React", "JSX"],
    github: "https://github.com/HarshGakare/Spotify-2.0",
    live: "",
    // image: spotifyImg,
  },

  {
    title: "Odsy Clone",
    description:
      "A front-end clone created using HTML and CSS that replicates the design and layout of the Odsy website.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/HarshGakare/odsy-clone",
    live: "",
    // image: odsyImg,
  },

  {
    title: "Animated Portfolio Website",
    description:
      "A personal portfolio website featuring smooth animations, interactive sections, and modern UI effects built with JavaScript and SCSS.",
    tech: ["JavaScript", "SCSS"],
    github: "https://github.com/HarshGakare/Animation_Portfolio",
    live: "",
    // image: portfolioImg,
  },

  {
    title: "Week 3 Final Internship Project",
    description:
      "A full-stack MERN application developed as the final internship project, implementing both frontend and backend functionalities.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/HarshGakare/Week3_Final_Project",
    live: "",
    // image: finalProjectImg,
  },
];

const No_Code_Projects = [
  {
    title: "Luxury Hair. ailored for You",
    image: HairImg,
    live: "https://numerous-cues-054340.framer.app",
  },
  {
    title: "Elevate Your Style with Premium Bags",
    image: HairStyleImg,
    live: "https://receptive-courgette-112482.framer.app",
  },
  {
    title: "SolarGen",
    image: SolarGenImg,
    live: "hhttps://solargen.framer.website",
  },
   {
    title: "Canvo",
    image: CanvoImg,
    live: "https://canvo.framer.website/",
  },
   {
    title: "Adware",
    image: adwareImg,
    live: "https://adware.framer.website/",
  },
   
 
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between mb-10">
          <h2 className="text-purple-500">
            FEATURED PROJECTS
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map(project => (
            <div
  key={project.title}
  className="bg-[#0b0b0f] border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
>
  {/* <img
    src={project.image}
    alt={project.title}
    className="w-full h-52 object-cover"
  /> */}

  <div className="p-6">
    <h3 className="text-2xl font-semibold">
      {project.title}
    </h3>

    <p className="text-sm  text-zinc-400 mt-3">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-5">
      {project.tech.map((t) => (
        <span
          key={t}
          className="text-xs px-3 py-1 border border-purple-700 rounded"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-4 mt-6">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg hover:border-purple-500 transition"
      >
        <FaGithub />
        Code
      </a>

      {/* <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <FaExternalLinkAlt />
        Live
      </a> */}
    </div>
  </div>
</div>
          ))}
        </div>
      </div>

      {/* // no_code_projects */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between mb-10">
          <h2 className="text-purple-500">
           NO CODE PROJECTS
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {No_Code_Projects.map(No_Code_Project => (
            <div
  key={No_Code_Project.title}
  className="bg-[#0b0b0f] border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
>
  <img
    src={No_Code_Project.image}
    alt={No_Code_Project.title}
    className="w-full h-52 object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-semibold">
      {No_Code_Project.title}
    </h3>


    <div className="flex flex-wrap gap-2 mt-5">
        <span
         
          className="text-xs px-3 py-1 border border-purple-700 rounded"
        >
          Framer
        </span>

    </div>

    <div className="w-fit mt-6">

      <a
        href={No_Code_Project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <FaExternalLinkAlt />
        Live
      </a>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-purple-500">Figma Work</h1>
         <div className="w-fit mt-6">

      <a
      href={"https://www.figma.com/design/j08Mm2aLuTrkhhHdcC2QcF/harshPortfolio?node-id=0-1&t=XcqHZLBcYcSnvJAv-1"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <FaExternalLinkAlt />
        See Work
      </a>
    </div>
      </div>
    </section>
  );
}