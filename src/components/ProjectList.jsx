import React from "react";
import "./ProjectList.css";
import bullsCowsGif from "../assets/bc.gif";
import galleryGif from "../assets/gallery.gif";
import lamodaGif from "../assets/lamoda.gif";
import notionGif from "../assets/notion.gif";
import todoGif from "../assets/notion.gif";

const projects = [
  {
    title: "Bulls 🐂 - Cows 🐄",
    description:
      "Bulls and Cows is a logic game where the player competes against the computer. One variation of the game involves the computer thinking of a four-digit number, and the player tries to guess it.",
    github: "https://github.com/Victoria6789/Resume/blob/main/bulls_cows.html",
    image: bullsCowsGif,
    size: { width: 370, height: 300 },
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Notion",
    description:
      "Notion is a versatile web application that allows users to create, delete, and edit their notes. Users can easily manage their notes with an intuitive and customizable interface.",
    github: "https://github.com/Victoria6789/project2.git",
    image: notionGif,
    size: { width: 370, height: 300 },
    technologies: "React, React.Context, Zod, Redux, JSON-Server",
  },
  {
    title: "Lamoda",
    description:
      "Lamoda is a platform that features a list of clothing items. Users can filter products by name, color, and price. Additionally, items can be sorted by popularity and price, allowing shoppers to easily and quickly find exactly what they are looking for.",
    github: "https://github.com/Victoria6789/project3.git",
    image: lamodaGif,
    size: { width: 370, height: 250 },
    technologies:
      "React, multiple filtering, functional components, CSS modules",
  },
  {
    title: "TodoIst",
    description:
      'This project is a simple "To-Do List" application that enables users to add, remove, and monitor tasks. Developed in TypeScript, the application features synchronization with Local Storage, allowing data to persist between sessions.',
    github: "https://github.com/Victoria6789/todo-list.git",
    image: todoGif,
    size: { width: 360, height: 250 },
    technologies: "React, class components, CSS modules",
  },
  {
    title: "Gallery",
    description:
      'Welcome to the Carina Gallery dedicated to the great French artist Claude Monet! Here you can enjoy a unique collection of his masterpieces, including famous paintings such as "Water Lilies" and "Impressionist Breakfast".',
    github: "https://github.com/Victoria6789/gallery.git",
    image: galleryGif,
    size: { width: 370, height: 200 },
    technologies: "HTML, CSS",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
          {project.image && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                width={project.size.width}
                height={project.size.height}
              />
            </a>
          )}
          <p className="technologies">
            <strong>Technologies:</strong> {project.technologies}
          </p>{" "}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
