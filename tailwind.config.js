/** @type {import('tailwindcss').Config} */
export default {
  // 'class' permite activar el modo oscuro añadiendo la clase "dark" al <html>
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aquí podrías añadir colores personalizados más adelante
    },
  },
  plugins: [],
}