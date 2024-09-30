import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import burguer from '../../assets/burguer-menu.svg'; // Asegúrate de que la ruta sea correcta

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='mt-6 md:hidden font-head text-secondary'>
      {/* Botón del menú móvil */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-buttonText hover:text-buttonText focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <img
          src={burguer}
          alt="Menu"
          className={` border-2 w-8 h-7 ms-3 ${isOpen ? 'hidden' : 'block'} transition-opacity duration-200 bg-background rounded-sm`}
        />
        <svg
          className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-200`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </svg>
      </button>

      {/* Dropdown del menú móvil */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-background ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative h-full">
          {/* Botón de cierre del menú */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-buttonText hover:text-buttonText focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Contenido del menú */}
          <nav aria-label="Mobile navigation" className="flex items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-10 text-3xl font-semibold text-secondary">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about-us" onClick={closeMenu}>¿Qué es FindMyPark?</Link></li>
              <li><Link to="/inform-data" onClick={closeMenu}>Informar de un Parking</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </nav>
  );
}

export default MobileNavBar;
