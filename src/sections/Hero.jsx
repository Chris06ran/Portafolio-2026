import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* 1. BADGE DE ESTADO: Refleja proactividad y disponibilidad inmediata */}
      <div className="mb-8 flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all animate-fade-in">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        Impulsando mi crecimiento profesional
      </div>

      {/* 2. TÍTULO: Diseño claro y conciso con enfoque en el nombre */}
      <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
        Hola, soy <span className="text-indigo-600 dark:text-indigo-400">Christian</span>
      </h1>

      {/* 3. PÁRRAFO ESTRATÉGICO: Refleja curiosidad, proactividad y mejora continua */}
      <p className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed text-balance">
        Desarrollador Junior con una fuerte <span className="text-slate-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4">mentalidad de aprendizaje</span>. 
        Especializado en transformar retos técnicos en soluciones eficientes mediante un proceso constante de <span className="italic">iteración y atención al detalle</span>.
      </p>

      {/* 4. BOTONES DE ACCIÓN: Call to action directo al portafolio sólido */}
      <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="px-10 py-4 bg-indigo-600 dark:bg-indigo-500 text-white font-bold rounded-2xl shadow-[0_10px_20px_-10px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 transition-all text-center"
        >
          Explorar mis retos técnicos
        </a>
        <a 
          href="#contact" 
          className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all text-center"
        >
          ¿Hablamos?
        </a>
      </div>

      {/* 5. INDICADOR DE SCROLL: Guía al evaluador hacia el resto del contenido visual */}
      <div className="absolute bottom-10 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;