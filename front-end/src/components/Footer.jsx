
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full py-8 border-t bg-background border-secondary">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src="/path-to-your-logo/logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Enlaces de Navegación */}
        <ul className="flex flex-col items-center mb-4 space-y-2 font-semibold md:mb-0 md:flex-row md:space-y-0 md:space-x-8 text-secondary">
          <li>
            <Link to="/" className="hover:text-primary">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-primary">Sobre mí</Link>
          </li>
          <li>
            <Link to="/inform-data" className="hover:text-primary">Informar de un Parking</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">Contacto</Link>
          </li>
        </ul>

        {/* Iconos de Redes Sociales */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
