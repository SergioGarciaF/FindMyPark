
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'  
import AboutUs from './components/AboutUs/AboutUs';
import Inform from './components/Inform/Inform';
import Contact from './components/Contact/Contact';
import usePageTracking from './hooks/usePageTracking';

function App() {
  
  usePageTracking("Home")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas que renderizarán en el <Outlet /> del Layout */}
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/inform-data' element={<Inform />} />
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
