
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col justify-between py-8 mt-10 border-t md:fixed md:w-60 top-64 bg-background border-secondary">
        {/* Iconos de Redes Sociales */}
        <div className="flex px-12 space-x-8">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-buttonText">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-buttonText">
            <FaGithub size={24} />
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} FindMyPark
        </div>
    </footer>
  );
}

export default Footer;
