import React from 'react';

const About = () => {
  // SE ACTUALIZÓ ESTE ARREGLO PARA INCLUIR PHP Y PYTHON
  const skills = [
    { name: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
    { name: "Backend", items: ["PHP", "Python"] }, // <--- Nueva sección estratégica
    { name: "Herramientas", items: ["Git", "GitHub", "Vercel", "Figma"] },
    { name: "En Crecimiento", items: ["Next.js", "TypeScript", "Node.js"] }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Columna 1: Perfil y Habilidades Blandas */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sobre mi enfoque</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-balance">
            <p>
              Soy un desarrollador apasionado por la construcción de productos digitales que no solo funcionen, sino que ofrezcan una experiencia excepcional. Mi enfoque se centra en la <span className="text-indigo-600 dark:text-indigo-400 font-bold italic">curiosidad constante</span> y la resolución de problemas mediante código limpio.
            </p>
            <p>
              Como desarrollador junior, entiendo que mi mayor activo es mi **capacidad de aprendizaje**. Por ello, trato cada proyecto como un proceso de iteración, buscando activamente feedback para seguir evolucionando mis habilidades técnicas y organizativas.
            </p>
            
            {/* Habilidades Blandas destacadas */}
            <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm dark:shadow-none transition-all">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Habilidades y Valores</h4>
              <ul className="grid grid-cols-1 gap-3 text-sm">
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-[10px]">✓</span> 
                  <strong>Proactividad:</strong> Desarrollo de proyectos desde cero para practicar.
                </li>
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-[10px]">✓</span> 
                  <strong>Comunicación:</strong> Capacidad de explicar decisiones técnicas de forma clara.
                </li>
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-[10px]">✓</span> 
                  <strong>Atención al detalle:</strong> Diseño limpio, conciso y fácil de navegar.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna 2: Stack Técnico y Aprendizaje */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Mi Stack Tecnológico</h3>
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.name}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">
                  {group.name}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        group.name === "En Crecimiento" 
                        ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/50" 
                        : "bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-600/50"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Pie de tarjeta: Mensaje de Proyección */}
          <div className="mt-10 pt-6 border-t border-slate-50 dark:border-slate-700 text-center text-xs text-slate-400 italic">
            "El aprendizaje es un proceso iterativo, no un destino final."
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;