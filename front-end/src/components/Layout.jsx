import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';


const Layout = () => {


  return (
    <div className="flex min-h-screen">
      <header className='hidden md:flex md:flex-col'>
        <NavBar />
        <MobileNavBar />
      </header>
      {/**Aqui residen todas las paginas de la web */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
