/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9fcfe', // Fondo principal
        primary: '#aae847',    // Botones, enlaces, encabezados
        secondary: '#292931',  // Bordes, fondos secundarios
        accent: '#b9f066',     // Notificaciones, detalles
      },
      fontFamily: {
        title: ['Space Grotesk', 'sans-serif'],   // Fuente para encabezados
        text: ['Lora', 'serif']    // Fuente para el texto del cuerpo
      },
    },
  },
  plugins: [animations],
}
