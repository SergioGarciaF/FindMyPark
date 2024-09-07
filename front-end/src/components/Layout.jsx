import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


const Layout = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      {/**Aqui residen todas las paginas de la web */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
