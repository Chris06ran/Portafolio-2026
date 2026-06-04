import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    // CAMBIO: dark:bg-slate-900
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          {/* CAMBIO: Título y descripción adaptativos */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Una selección de mis trabajos más recientes, incluyendo retos técnicos y proyectos personales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;