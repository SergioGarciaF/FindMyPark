import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import { House, BookOpen, BadgeInfo, Mail, Heart} from 'lucide-react'



const Navbar = () => {

  return (

    <aside className="fixed z-50 flex flex-col items-center w-20 h-screen border-r border-secondary bg-background">
        {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="Logo FindMyPark"
          className="w-16 h-16 mt-4 mb-4" // Ajusta el tamaño del logo
        />
      </Link>
      <nav className="flex flex-col flex-1 pt-10 gap-y-4">
        <Link to='/' className="relative p-2 text-blue-600 bg-background group rounded-xl hover:bg-primary">
          <svg className="stroke-current w-6.5 h-6.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <House className='text-secondary' />
          </svg>
          <div className="absolute inset-y-0 z-50 items-center hidden left-12 group-hover:flex">
            <div className="relative px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md whitespace-nowrap drop-shadow-lg">
              <div className="absolute inset-0 flex items-center -left-1">
                <div className="w-2 h-2 rotate-45 bg-white"></div>
              </div>
              Página principal
            </div>
          </div>
        </Link>
        <Link to='/about-us' className="relative p-2 text-blue-600 bg-background group rounded-xl hover:bg-primary">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BookOpen className='text-secondary' />
          </svg>
          <div className="absolute inset-y-0 z-50 items-center hidden left-12 group-hover:flex">
            <div className="relative px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md whitespace-nowrap drop-shadow-lg">
              <div className="absolute inset-0 flex items-center -left-1">
                <div className="w-2 h-2 rotate-45 bg-white"></div>
              </div>
              ¿Que es FindMyPark?
            </div>
          </div>
        </Link>
        <Link to='/inform-data' className="relative p-2 text-blue-600 bg-background group rounded-xl hover:bg-primary">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BadgeInfo className='text-secondary' />
          </svg>
          <div className="absolute inset-y-0 z-50 items-center hidden left-12 group-hover:flex">
            <div className="relative px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md whitespace-nowrap drop-shadow-lg">
              <div className="absolute inset-0 flex items-center -left-1">
                <div className="w-2 h-2 rotate-45 bg-white"></div>
              </div>
              Informar de un parking
            </div>
          </div>
        </Link>
        <Link to='/contact' className="relative p-2 text-blue-600 bg-background group rounded-xl hover:bg-primary">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mail className='text-secondary' />
          </svg>
          <div className="absolute inset-y-0 z-50 items-center hidden left-12 group-hover:flex">
            <div className="relative px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md whitespace-nowrap drop-shadow-lg">
              <div className="absolute inset-0 flex items-center -left-1">
                <div className="w-2 h-2 rotate-45 bg-white"></div>
              </div>
              Contacta con nosotros
            </div>
          </div>
        </Link>
      </nav>

      <div className="flex flex-col items-center py-10 gap-y-4">

        <Link to='/contact' className="relative p-2 text-blue-600 bg-background group rounded-xl hover:bg-primary">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Heart className='text-secondary'/>
          </svg>
          <div className="absolute inset-y-0 z-50 items-center hidden left-12 group-hover:flex">
            <div className="relative px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md whitespace-nowrap drop-shadow-lg">
              <div className="absolute inset-0 flex items-center -left-1">
                <div className="w-2 h-2 rotate-45 bg-white"></div>
              </div>
              Donar
            </div>
          </div>
        </Link>
      </div>
    </aside>

  );


};

export default Navbar;
