import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect } from 'react';

// Hook personalizado para actualizar la vista del mapa cuando la ubicación cambia
const ChangeMapView = ({ location, selectPosition}) => {
  const map = useMap();
  
  useEffect(() => {
    // Si hay una ubicación seleccionada, cambia la vista a esa ubicación
    if (selectPosition) {
      map.setView([selectPosition.lat, selectPosition.lon], 22); // lon en lugar de lng para Nominatim
    } else {
      // Si no hay una ubicación seleccionada, utiliza la ubicación predeterminada
      map.setView([location.lat, location.lng], 13);
    }
  }, [location, selectPosition, map]);

  return null;
};

const MapView = ({ location, parkings, selectPosition}) => {
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <section className="relative w-full h-full">
      {/* Contenedor del mapa */}
      <MapContainer
        className="relative z-0"  // Posicionamiento relativo y z-index por defecto
        center={[location.lat, location.lng]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <ChangeMapView location={location} selectPosition={selectPosition} />
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=lOBLIUjRiW4O5wNHxSAz"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
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
