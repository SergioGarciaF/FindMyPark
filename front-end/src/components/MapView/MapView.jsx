import L from 'leaflet'; // Importamos Leaflet para manejar mapas y sus funcionalidades
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; // Componentes de react-leaflet para manejar el mapa
import 'leaflet/dist/leaflet.css'; // Importamos estilos CSS de Leaflet
import MarkerClusterGroup from 'react-leaflet-cluster'; // Para agrupar múltiples marcadores
import { useEffect } from 'react';

// Hook personalizado para actualizar la vista del mapa cuando la ubicación cambia
const ChangeMapView = ({ location }) => {
  const map = useMap(); // Obtenemos el mapa usando el hook de react-leaflet
  useEffect(() => {
    map.setView([location.lat, location.lng], 13); // Cambiamos la vista del mapa a las coordenadas de la nueva ubicación
  }, [location, map]); 

  return null; 
};

const MapView = ({ location, parkings }) => {
  // Icono personalizado para los marcadores en el mapa
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', 
    iconSize: [25, 41], // Tamaño del icono del marcador
    iconAnchor: [12, 41], // Punto de anclaje del icono (el "pie" del marcador)
    popupAnchor: [1, -34], // Ajusta la posición del popup respecto al marcador
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra del marcador
    shadowSize: [41, 41], // Tamaño de la sombra del marcador
  });

  return (
    <section className="relative w-full h-[calc(60vh-60px)] md:h-[calc(90vh-124px)]" aria-labelledby="map-title">
      {/* Etiqueta para accesibilidad */}
      <h2 id="map-title" className="sr-only">Mapa de Estacionamientos</h2>

      {/* Contenedor principal del mapa */}
      <MapContainer
        className="absolute inset-0" // Posicionamiento absoluto para ocupar toda la sección
        center={[location.lat, location.lng]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }} 
        zoomControl={false} // Desactiva el control de zoom predeterminado
      >
        {/* Hook personalizado para actualizar la vista cuando cambie la ubicación */}
        <ChangeMapView location={location} />

        {/* Capa de mosaico de OpenStreetMap para mostrar el mapa */}
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" // Fuente de los mosaicos del mapa
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Atribución a los contribuidores de OpenStreetMap
        />

        {/* Agrupación de marcadores para evitar la superposición */}
        <MarkerClusterGroup>
          {parkings.map(parking => (
            <Marker key={parking.id} position={[parking.lat, parking.lng]} icon={customIcon}>
              <Popup>
                <strong>{parking.name || 'Parking'}</strong>
                <br />
                <span>
                  <a
                    href={`https://maps.google.com/?q=${parking.lat},${parking.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${parking.name || 'este estacionamiento'} en Google Maps`}
                  >
                    Ver en Google Maps
                  </a>
                </span>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </section>
  );
};

export default MapView;
