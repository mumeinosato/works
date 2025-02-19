"use client";

import '@ant-design/v5-patch-for-react-19';
import { Card } from 'antd';
import * as React from 'react';
import projects from './projects';
import { useState } from 'react';
import techStackIcons from './techStackIcons';

interface Project {
  name: string;
  description: string;
  github: string;
  demo?: string;
  techStack: (keyof typeof techStackIcons)[];
  image: string;
  role: string;
}
const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8 transition-colors duration-500">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg">Works</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            className="shadow-2xl transform transition duration-500 hover:scale-105 bg-white bg-opacity-90 cursor-pointer"
            onClick={() => handleCardClick(project)}
          >
            <div className="flex flex-col h-full">
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  GitHub Repository
                </a>
                <br />
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline"
                  >
                    Demo Page
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClosePopup}>
          <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 relative transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleClosePopup}
              className={`absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-transform duration-300 ease-in-out transform ${Math.random() < 0.02 ? 'hover:-translate-x-8' : ''}`}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 drop-shadow-lg">
              {selectedProject.name}
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              {selectedProject.description}
            </p>
            <p className="text-gray-700 mb-4 text-center">
              担当: {selectedProject.role}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {selectedProject.techStack.map((tech) => (
                <div key={tech} className="relative group">
                  <img src={techStackIcons[tech]} alt={tech} className="h-8 w-8" />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-auto text-center">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                GitHub Repository
              </a>
              <br />
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  Demo Page
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
