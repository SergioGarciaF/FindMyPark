/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFDFD', // Fondo principal
        primary: '#86a473',    // Botones, enlaces, encabezados
        secondary: '#4E514D',  // Bordes, fondos secundarios
        accent: '#e0edc5',     // Notificaciones, detalles
        neutral: '#edecec',    // Texto secundario, iconos
        buttonText: '#222222', // Texto para botones
      },
      fontFamily: {
        head: ['Work Sans', 'sans-serif'],   // Fuente para encabezados
        text: ['Merriweather', 'serif'],    // Fuente para el texto del cuerpo
      },
    },
  },
  plugins: [],
}
