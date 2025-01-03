import { useState, useEffect } from "react";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import useTrackEvent from "../../hooks/useTrackEvent";

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?';

const SearchAddress = ({ setSelectPosition }) => {
  const [searchText, setSearchText] = useState("");
  const [listPlaces, setListPlace] = useState([]);
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const trackEvent = useTrackEvent()

  // Hook para aplicar debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
      if (searchText.length > 2) {
        trackEvent({
          action: "input_search",
          category: "Search",
          label: searchText,  
        });
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Llamada a la API cuando el valor debounced cambia
  useEffect(() => {
    if (debouncedSearchText.length > 2) {
      const params = {
        q: debouncedSearchText,
        format: 'json',
        addressdetails: 1,
        polygon_geojson: 0,
        limit: 4
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          setListPlace(JSON.parse(result));
        })
        .catch(err => console.log("err: ", err));
    } else {
      setListPlace([]);
    }
  }, [debouncedSearchText]);

  return (
    <div className="relative z-20 w-64 mx-auto md:w-1/4">
      <div className="flex">
        <input
          className="w-full px-4 py-2 mt-4 transition duration-300 shadow-sm bg-background ms-4 rounded-3xl focus:shadow-md focus:outline-none focus:ring-2 text-secondary"
          type="text"
          placeholder="Escribe una dirección"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <MobileNavBar />
      </div>
      <div className="max-w-md mx-auto mt-2 overflow-hidden bg-white rounded-lg shadow-lg">
        <ul className="divide-y divide-gray-200" data-testid="suggestions-list">
        {listPlaces.map(item => (
            <li key={item?.place_id} className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-100" onClick={() => {
              setSelectPosition({
                lat: parseFloat(item?.lat || item?.boundingbox[0]), 
                lng: parseFloat(item?.lon || item?.boundingbox[1]),
              });
              setSearchText("");
            }}>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-900">{`${item?.display_name}`}</div>
                <div className="text-sm text-gray-500">{item?.address.town}</div>
                <div className="text-sm text-gray-500">{item?.address.city}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAddress;
