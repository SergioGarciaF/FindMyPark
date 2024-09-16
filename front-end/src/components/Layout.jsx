import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import MobileNavBar from './MobileNavBar/MobileNavBar';


const Layout = () => {


  return (
    <div className="flex min-h-screen">
      <header className='hidden md:flex md:flex-col w-72'>
        <NavBar />
        <MobileNavBar />
        <Footer/>
      </header>
      {/**Aqui residen todas las paginas de la web */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
