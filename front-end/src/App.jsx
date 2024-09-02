// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'  // Ajusta según la ruta de tu componente
import AboutUs from './components/AboutUs/AboutUs';
import Inform from './components/Inform/Inform';
import Contact from './components/Contact/Contact';
       // Ajusta según la ruta de tu componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas que renderizarán en el <Outlet /> del Layout */}
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/inform-data' element={<Inform />} />
          <Route path='/contact' element={<Contact />}/>
          {/* Puedes agregar más rutas según sea necesario */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
