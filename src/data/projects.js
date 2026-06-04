
export const projectsData = [
  {
    id: 1,
    title: "Gestor CRUD de Tareas",
    type: "Reto Técnico", // Resalta que ya pasaste pruebas de selección
    description: "Aplicación robusta para la gestión de tareas diarias. Implementa un flujo completo de datos (CRUD) con persistencia garantizada y una interfaz intuitiva que prioriza la experiencia del usuario.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    // Lineamiento: Evidencia visual (Web y Móvil)
    image: "/images/projects/crud-desktop.png", 
    imageMobile: "/images/projects/crud-mobile.png", 
    github: "https://github.com/Chris06ran/Gestor-CRUD-app",
    demo: "https://crud-app-front-navy.vercel.app/",
    features: ["Persistencia de datos con LocalStorage", "Notificaciones interactivas", "Filtrado dinámico de tareas", "Interfaz adaptativa (Mobile First)"],
    highlight: true 
  },
  {
    id: 2,
    title: "E-commerce Pro",
    type: "Proyecto Personal", // Muestra iniciativa propia
    description: "Desarrollado desde cero para practicar el manejo de estados complejos. Incluye carrito de compras dinámico y filtrado de productos eficiente.",
    tech: ["React", "Context API", "Tailwind"],
    image: "/images/projects/shop-desktop.png",
    imageMobile: "/images/projects/shop-mobile.png",
    github: "https://github.com/tu-usuario/proyecto",
    demo: "https://demo.com",
    features: ["Manejo de Estados", "Pasarela Simulada", "Filtros Avanzados"],
    highlight: false
  },
  {
    id: 3,
    title: "Validador de Tarjetas",
    type: "Reto Técnico", 
    description: "Implementación de algoritmos de validación (Luhn). Mejorado tras recibir feedback para incluir una interfaz más limpia y accesible.",
    tech: ["JavaScript", "CSS Nativo", "HTML5"],
    image: "https://via.placeholder.com/600x400",
    imageMobile: "https://via.placeholder.com/300x600",
    github: "https://github.com/tu-usuario/reto",
    demo: "https://demo.com",
    features: ["Algoritmos", "Manipulación del DOM", "Feedback de usuario"],
    highlight: false
  }
];