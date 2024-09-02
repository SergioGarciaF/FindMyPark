// src/components/Layout.jsx
import { Outlet} from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {/* Aquí puedes poner tu contenido de header si lo necesitas */}
        <NavBar/>
      </header>

      {/* Esta es el área donde se renderizarán los componentes de cada ruta */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer constante */}
      <Footer />
    </div>
  );
};

export default Layout;
