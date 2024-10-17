import axios from 'axios'

//http://localhost:3002/parkings
///api/parkings
const baseUrl = '/api/parkings';

// Función para obtener todos los parkings
const getData = async () => {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
};

const getNearbyParkings = async (latitude, longitude) => {
    const request = axios.get(`${baseUrl}/nearby`, {
        params: {
            lat: latitude,
            lng: longitude
        }
    });
    const response = await request;
    return response.data;
};

export default { getData, getNearbyParkings };


