import { useEffect, useState } from 'react';
import parkingService from '../../services/parkings';

// Función para calcular la distancia entre dos coordenadas (fórmula haversine)
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distancia en km
  return distance.toFixed(2); // Redondear a 2 decimales
};

const NearbyParkings = ({ selectedLocation }) => {
  const [nearbyParkings, setNearbyParkings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNearbyParkings = async () => {
      if (selectedLocation) {
        setLoading(true);
        try {
          const { lat, lng } = selectedLocation;
          console.log(`Fetching parkings for lat: ${lat}, lng: ${lng}`);

          // Obtener los parkings cercanos
          const parkings = await parkingService.getNearbyParkings(lat, lng);

          console.log('Parkings fetched:', parkings);
          setNearbyParkings(parkings);
        } catch (error) {
          console.error('Error al obtener los parkings cercanos:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNearbyParkings();
  }, [selectedLocation]);

  return (
    <div className="mx-auto mt-8 bg-white shadow-sm md:max-w-3xl rounded-xl">
      <h3 className="px-6 py-4 text-xl font-semibold text-gray-900">Parkings Cercanos</h3>
      {loading ? (
        <p className="px-6 py-4 text-gray-500">Cargando parkings cercanos...</p>
      ) : (
        <ul className="max-w-3xl overflow-y-auto divide-y divide-gray-300 max-h-80">
          {nearbyParkings.length > 0 ? (
            nearbyParkings.map((parking) => {
              const distance = calculateDistance(
                selectedLocation.lat,
                selectedLocation.lng,
                parking.location.coordinates[1],
                parking.location.coordinates[0]
              );

              return (
                <li key={parking.id} className="flex items-center px-6 py-5 transition-all hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="text-lg font-medium text-gray-900">{parking.name || 'Parking'}</div>
                    <div className="text-sm text-gray-600">Ciudad: {parking.city || 'Parking'}</div>
                    <div className="text-sm text-gray-600">Tamaño: {parking.size || 'Parking'}</div>
                    <div className="text-sm text-gray-600">Distancia: {distance} km</div>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${parking.location.coordinates[1]},${parking.location.coordinates[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-blue-500 hover:underline"
                  >
                    Ver en Google Maps
                  </a>
                </li>
              );
            })
          ) : (
            <p className="px-6 py-4 text-gray-500">No se encontraron parkings cercanos.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default NearbyParkings;
