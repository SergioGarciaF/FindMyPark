import { useState, useEffect } from 'react';
import MapView from './MapView/MapView';
//import SearchBar from './SearchBar/SearchBar';
//import { cities } from '../constants/cities';
import parkingsService from '../services/parkings';
import { Helmet } from 'react-helmet'
import SearchAddress from './SearchAddress/SearchAddress';

function Home() {
  const [location, setLocation] = useState({ lat: 41.326319, lng: 2.096115 });
  const [parkings, setParkings] = useState([]);
  const [selectPosition, setSelectPosition] = useState(null)

  console.log(selectPosition)

  useEffect(() => {
    if (selectPosition) {
      console.log("Nueva posición seleccionada:", selectPosition);
    }
  }, [selectPosition]);

  // Solicitud GET donde se reciben todos los parkings de la BD
  useEffect(() => {
    parkingsService
      .getData()
      .then(data => setParkings(data));
  }, []);

  // Función para buscar una ciudad en la barra de búsqueda
  {/**
    const handleSearchCity = (searchTerm) => {
    const foundCity = cities.find(city =>
      city.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundCity) {
      setLocation({ lat: foundCity.lat, lng: foundCity.lng });
    } else {
      alert('Ciudad no encontrada. Intenta con otro nombre.');
    }
  };**/}



  return (
    <>
      <Helmet>
        {/* Título con palabras clave */}
        <title>FindMyPark - Encuentra Parkings Gratuitos cerca de ti</title>
  
        {/* Meta descripción optimizada */}
        <meta
          name="description"
          content="Descubre los mejores parkings gratuitos cerca de tu ubicación con FindMyPark. Informamos sobre plazas de estacionamiento libre en tiempo real. ¡Aparcar nunca fue tan fácil!"
        />
  
        {/* Meta keywords */}
        <meta
          name="keywords"
          content="parking gratuito, estacionamiento libre, aparcamiento gratuito, parking gratis, FindMyPark, aparcamiento gratis, parking gratis Barcelona, aparcamiento gratis Barcelona, parking Barcelona"
        />
  
        {/* Etiquetas Open Graph para redes sociales */}
        <meta property="og:title" content="FindMyPark - Encuentra Parkings Gratuitos cerca de ti" />
        <meta
          property="og:description"
          content="Encuentra fácilmente parkings gratuitos en tu ciudad con FindMyPark. Estacionamiento sencillo y sin costos."
        />
        <meta property="og:image" content="URL_DE_LA_IMAGEN_DEL_LOGO_O_DE_LA_WEB" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta property="og:type" content="website" />
  
        {/* Etiquetas para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FindMyPark - Encuentra Parkings Gratuitos" />
        <meta name="twitter:description" content="Descubre parkings gratuitos cerca de ti con FindMyPark." />
        <meta name="twitter:image" content="URL_DE_LA_IMAGEN_DEL_LOGO_O_DE_LA_WEB" />
  
        {/* Schema.org (Estructura de datos) */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FindMyPark",
          "url": "https://tusitio.com",
          "logo": "URL_DE_LA_IMAGEN_DEL_LOGO_O_DE_LA_WEB",
          "description": "FindMyPark ayuda a los usuarios a encontrar estacionamientos gratuitos cerca de ellos.",
          "sameAs": [
            "https://www.facebook.com/FindMyPark",
            "https://www.twitter.com/FindMyPark",
            "https://www.instagram.com/FindMyPark"
          ]
        }
      `}
        </script>
      </Helmet>
  
      <div className="relative w-full h-screen"> {/* Asegúrate de que el contenedor ocupe toda la pantalla */}
        <SearchAddress selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
        {/* Mapa */}
        <div className="absolute inset-0">
          <MapView location={location} parkings={parkings} selectPosition={selectPosition} />
        </div>
      </div>
    </>
  );
}

export default Home;
