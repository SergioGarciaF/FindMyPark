import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:mx-32 text-secondary bg-background font-head">
      <div className="min-w-full px-4 mx-auto sm:px-6 lg:px-12 lg:py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold ">Logo</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden text-lg md:flex md:space-x-8">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about-us" className="hover:text-gray-400">¿Que es FindMyPark?</Link>
            <Link to="/inform-data" className="hover:text-gray-400">Informar de un Parking</Link>
            <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-buttonText hover:text-buttonText focus:outline-none"
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
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className="w-full md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="flex flex-col items-center py-10 space-y-10 text-3xl font-semibold text-secondary">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about-us" onClick={closeMenu}>¿Que es FindMyPark?</Link></li>
          <li><Link to="/inform-data" onClick={closeMenu}>Informar de un Parking</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
