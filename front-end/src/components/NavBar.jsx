import { Link } from 'react-router-dom';
import { House, BookOpen, BadgeInfo, Mail } from 'lucide-react'



const Navbar = () => {

  {/**<nav className="md:fixed md:top-0 text-secondary bg-background font-head">
      <div className="min-w-full px-4 mx-auto sm:px-6 lg:px-6 lg:py-2">
        <div className="flex flex-col items-center justify-between w-full h-full ">
          {/* Enlaces de navegacion de escritorio */}
  {/**<div className="hidden mt-4 space-y-4 text-lg md:flex md:flex-col">
            <Link to="/" className="mb-4 text-2xl font-bold">Logo</Link>
            <Link to="/" className="font-semibold hover:text-buttonText">Home</Link>
            <Link to="/about-us" className="font-semibold hover:text-buttonText">¿Qué es FindMyPark?</Link>
            <Link to="/inform-data" className="font-semibold hover:text-buttonText">Informar de un Parking</Link>
            <Link to="/contact" className="font-semibold hover:text-buttonText">Contacto</Link>
          </div>
        </div>

      </div>
    </nav>*/}


  return (

    <aside className="fixed z-50 flex flex-col items-center w-20 h-screen bg-white border-r border-gray-200">
      <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s" />
      </div>
      <nav className="flex flex-col flex-1 pt-10 gap-y-4">
        <Link to='/' className="relative p-2 text-blue-600 bg-gray-100 group rounded-xl hover:bg-gray-50">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <House color='black' />
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
        <Link to='/about-us' className="relative p-2 text-blue-600 bg-gray-100 group rounded-xl hover:bg-gray-50">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BookOpen color='black' />
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
        <Link to='/inform-data' className="relative p-2 text-blue-600 bg-gray-100 group rounded-xl hover:bg-gray-50">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BadgeInfo color='black' />
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
        <Link to='/contact' className="relative p-2 text-blue-600 bg-gray-100 group rounded-xl hover:bg-gray-50">
          <svg className="w-6 h-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mail color='black' />
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
        <button className="relative p-2 text-gray-400 group rounded-xl hover:bg-gray-100">
          <svg width="24" height="24" className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

          </svg>
        </button>

        <button className="mt-2 bg-gray-100 rounded-full">
          <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/35387401?v=4" alt="" />
        </button>
      </div>
    </aside>

  );


};

export default Navbar;
