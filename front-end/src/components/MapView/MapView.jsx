import L from 'leaflet';
import PositonMarkerIcon from '../../assets/location_10797401.png'
import ParkingMarkerIcon from '../../assets/ParkingMarker.webp'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect } from 'react';
import NearbyParkings from '../NearbyParkings/NearbyParkings';

// Hook personalizado para actualizar la vista del mapa cuando la ubicación cambia
const ChangeMapView = ({ location, selectPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      const { lat, lng } = selectPosition; 
      console.log('Changing map view to:', lat, lng);
      map.setView([lat, lng], 21);
    } else {
      map.setView([location.lat, location.lng], 13);
    }
  }, [location, selectPosition, map]);

  return null;
};

const MapView = ({ location, parkings, selectPosition }) => {


  const customIcon = new L.Icon({
    iconUrl: ParkingMarkerIcon,
    iconSize: [28, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  const positionIcon = new L.Icon({
    iconUrl: PositonMarkerIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });


  return (
    <section className="relative z-0 h-full md:ml-20 ">
      {/* Contenedor del mapa */}
      <MapContainer
        className="relative z-0"
        center={[location.lat, location.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <ChangeMapView location={location} selectPosition={selectPosition} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {parkings.map(parking => (
            <Marker
              key={parking.id}
              position={[parking.location.coordinates[1], parking.location.coordinates[0]]} // Cambiado aquí
              icon={customIcon}
            >
              <Popup>
                <strong>Nombre: {parking.name || 'Parking'}</strong>
                <p className='text-secondary'>Ciudad: {parking.city || 'Parking'}</p >
                <p className='text-secondary'>Tamaño: {parking.size || 'Parking'}</p>
                <span>
                  <a
                    href={`https://maps.google.com/?q=${parking.location.coordinates[1]},${parking.location.coordinates[0]}`} // Cambiado aquí
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
        {/* Añadir el marcador para la posición seleccionada */}
        {selectPosition && (
          <Marker position={[selectPosition.lat, selectPosition.lng]} icon={positionIcon}>
            <Popup>
              <strong>Posición seleccionada</strong>
              <p>Lat: {selectPosition.lat}, Lng: {selectPosition.lng}</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Mostrar NearbyParkings solo si hay una posición seleccionada */}
      {selectPosition && (
        <div className="absolute w-full transform -translate-x-1/2 md:w-96 bottom-4 left-1/2">
        <NearbyParkings selectedLocation={selectPosition} />
      </div>
      
      )}

    </section>
  );
};

export default MapView;
