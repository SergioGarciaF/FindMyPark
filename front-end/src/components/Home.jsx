import { useState, useEffect } from 'react';
import MapView from './MapView/MapView';
//import SearchBar from './SearchBar/SearchBar';
//import { cities } from '../constants/cities';
import parkingsService from '../services/parkings';
import {Helmet} from 'react-helmet-async'
import SearchAddress from './SearchAddress/SearchAddress';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState({ lat: 41.326319, lng: 2.096115 });
  const [parkings, setParkings] = useState([]);
  const [selectPosition, setSelectPosition] = useState(null)

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

        {/* Etiquetas Open Graph para redes sociales */}
        <meta property="og:title" content="FindMyPark - Encuentra Parkings Gratuitos cerca de ti" />
        <meta
          property="og:description"
          content="Encuentra fácilmente parkings gratuitos en tu ciudad con FindMyPark. Estacionamiento sencillo y sin costos."
        />
        <meta property="og:image" content="https://tusitio.com/logo.png" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta property="og:type" content="website" />

        {/* Etiquetas para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FindMyPark - Encuentra Parkings Gratuitos" />
        <meta name="twitter:description" content="Descubre parkings gratuitos cerca de ti con FindMyPark." />
        <meta name="twitter:image" content="https://tusitio.com/logo.png" />

        {/* Schema.org (Estructura de datos) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FindMyPark",
              "url": "https://tusitio.com",
              "logo": "https://tusitio.com/logo.png",
              "description": "FindMyPark ayuda a los usuarios a encontrar estacionamientos gratuitos cerca de ellos.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer service"
              }
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
