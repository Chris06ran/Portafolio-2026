import React, { useState, useEffect } from 'react';

// Importación de componentes (Asegúrate de que estas rutas sean correctas)
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  // 1. Lógica Global de Modo Oscuro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    // 2. Estructura Principal
    // La clase "dark:bg-slate-900" asegura que el fondo cambie en toda la web
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:selection:bg-indigo-900 dark:selection:text-indigo-200">
      
      {/* Pasamos darkMode y setDarkMode como "props" al Navbar para que el botón funcione */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

// 3. Exportación vital para que main.jsx lo encuentre
export default App;