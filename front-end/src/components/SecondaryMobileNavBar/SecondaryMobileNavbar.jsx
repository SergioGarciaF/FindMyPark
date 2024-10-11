import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo.svg'

const SecondaryMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden text-secondary bg-background font-head">
      <div className="min-w-full px-4 mx-auto mb-4 sm:px-6 lg:px-12 lg:py-2">
        <div className="flex items-center justify-between h-16 p-4">
          {/* Logo alineado a la izquierda */}
          <Link to="/" className="flex items-center">
            <img src={Logo} className="w-16 h-16 mt-4" alt="Logo" />
          </Link >
          {/* Botón del menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-buttonText hover:text-buttonText focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <motion.svg
              className="w-6 h-6"
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
            </motion.svg>
          </button>
        </div>

        {/* Dropdown del menú móvil */}
        <motion.div
          className={`w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav aria-label="Mobile navigation" className="flex items-center justify-center h-96">
            <ul className="flex flex-col items-center space-y-10 text-3xl font-semibold text-secondary">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about-us" onClick={closeMenu}>¿Qué es FindMyPark?</Link></li>
              <li><Link to="/inform-data" onClick={closeMenu}>Informar de un Parking</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </nav>
  );
};

export default SecondaryMobileNavbar;
