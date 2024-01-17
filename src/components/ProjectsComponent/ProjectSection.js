import React from "react";
import "../../styles/ProjectSection.css";
import notepad from "../../assets/NotepadImg.png";
import todo from "../../assets/todoAppLogo.jpg";
import portfolio from "../../assets/portfolioImg.jpeg";
import testing from "../../assets/TestImg.png";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import dataBase from "../../assets/dbOptimizationTechniques.jpg";
import calculator from "../../assets/calculator.jpg";
const ProjectSection = () => {
  const projects = [
    {
      img: todo,
      title: "To-Do App",
      description:
        "A minimalist React-based ToDo app for efficient task management, featuring a clean user interface and dynamic updates.",
      url: "https://github.com/3bd-allah/to-do-app",
    },
    {
      img: notepad,
      title: "Notepad",
      description:
        "A feature-rich Notepad application built with .NET and C#, offering a user-friendly interface, text editing capabilities, and essential functionality for seamless note-taking and organization.",
      url: "https://github.com/3bd-allah/Notepad",
    },
    {
      img: portfolio,
      title: "Portfolio form Scratch",
      description:
        "Crafted a personalized portfolio from scratch using a combination of HTML, CSS, and JavaScript, showcasing a dynamic and visually appealing collection of projects, skills, and achievements for a compelling online presence.",
      url: "https://github.com/3bd-allah/creating_portfolio_from_scratch",
    },
    {
      img: testing,
      title: "Unit Testing",
      description:
        "Effortlessly ensure the reliability of your React applications with the React Testing Library and Jest – a powerful combination for writing clear and effective tests, ensuring robust code quality and seamless UI testing.",
      url: "https://github.com/3bd-allah/feedback-with-test-Jest-React-Testing-library",
    },
    {
      img: dataBase,
      title: "Database Optimization Techniques",
      description:
        "Implementing efficient database optimization techniques, such as indexing, query optimization, and normalization, to enhance database performance, reduce query execution times, and ensure optimal resource utilization for a streamlined and responsive data management system.",
      url: "https://github.com/3bd-allah/Optimization-Techniques-for-Database",
    },
    {
      img: calculator,
      title: "Calculator App",
      description:
        "Implementing efficient database optimization techniques, such as indexing, query optimization, and normalization, to enhance database performance, reduce query execution times, and ensure optimal resource utilization for a streamlined and responsive data management system.",
      url: "https://github.com/3bd-allah/calculator-app",
    },
  ];

  return (
    <div id="projects-section" className="ProjectSection">
      <div className="row w-25">
        <h2 className="mb-4 m-auto text-black ms-5  lh-lg flex-fill text-decoration-underline">
          Featured Projects{" "}
        </h2>
      </div>

      {/* Looping on projects bootstrap card  */}
      {/* <div className="row w-75  m-auto d-flex  p-5  ">
        {projects.map((project, index) => (
            <div className="col-lg-4 "> 
              <ProjectCard
                key={index}
                img={project.img}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </div>
        ))}
      </div> */}

      {/* another card style Chakra UI Card */}
      <div className="row ms-5 ">
        {projects.map((project, index) => (
          <ProjectCard2
            key={index}
            title={project.title}
            img={project.img}
            url={project.url}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
