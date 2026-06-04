import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col h-full">
      
      {/* 1. CONTENEDOR DE IMAGEN (Evidencia Visual) */}
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge Dinámico: Reto Técnico vs Proyecto Personal */}
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md border ${
            project.type === "Reto Técnico" 
            ? "bg-amber-500/90 text-white border-amber-400" 
            : "bg-indigo-600/90 text-white border-indigo-500"
          }`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* 2. CONTENIDO TÉCNICO (Descripción clara y concisa) */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-tighter mt-1">
            Stack: {project.tech.join(" • ")}
          </p>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* 3. IMPACTO Y LOGROS (Lineamiento: Proyectar Crecimiento) */}
        {project.features && (
          <div className="mb-6">
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Logros clave:</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.features.map((feature, index) => (
                <span key={index} className="flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-green-500 text-lg">•</span> {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 4. ACCIONES (Call to Action claro) */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-700">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub
          </a>
          
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center py-2 px-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all duration-300 shadow-sm shadow-indigo-200/50 dark:shadow-none"
          >
            Ver Proyecto en Vivo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;