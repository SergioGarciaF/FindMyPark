import { useState } from 'react';
import MapView from './MapView/MapView';
import SearchBar from './SearchBar/SearchBar';
import { cities } from '../constants/cities';
import parkingsService from '../services/parkings'
import { useEffect } from "react";

function Home() {
  const [location, setLocation] = useState({ lat: 41.326319, lng: 2.096115 });
  const [parkings, setParkings] = useState([])

  useEffect(() => {
    parkingsService
    .getData()
    .then(data => setParkings(data))
  }, [])

  const handleSearch = (searchTerm) => {
    const foundCity = cities.find(city =>
      city.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundCity) {
      setLocation({ lat: foundCity.lat, lng: foundCity.lng });
    } else {
      alert('Ciudad no encontrada. Intenta con otro nombre.');
    }
  };


  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MapView location={location} parkings={parkings}/>
    </>
  );
}

export default Home;
