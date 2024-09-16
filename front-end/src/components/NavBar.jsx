import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="md:fixed md:top-0 text-secondary bg-background font-head">
      <div className="min-w-full px-4 mx-auto sm:px-6 lg:px-6 lg:py-2">
        <div className="flex flex-col items-center justify-between w-full h-full ">
          {/* Enlaces de navegacion de escritorio */}
          <div className="hidden mt-4 space-y-4 text-lg md:flex md:flex-col">
            <Link to="/" className="mb-4 text-2xl font-bold">Logo</Link>
            <Link to="/" className= "font-semibold hover:text-buttonText">Home</Link>
            <Link to="/about-us" className="font-semibold hover:text-buttonText">¿Qué es FindMyPark?</Link>
            <Link to="/inform-data" className="font-semibold hover:text-buttonText">Informar de un Parking</Link>
            <Link to="/contact" className="font-semibold hover:text-buttonText">Contacto</Link>
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
