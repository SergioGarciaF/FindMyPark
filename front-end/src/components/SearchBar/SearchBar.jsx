import Select from 'react-select';
import { cities } from '../../constants/cities'; // Ajusta la ruta según sea necesario

const SearchBar = ({ onSearch }) => {
  const cityOptions = cities.map(city => ({
    value: city.name,
    label: city.name
  }));

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      onSearch(selectedOption.value);
    }
  };

  return (
    <div className="relative w-full "> 
      <Select
        options={cityOptions}
        onChange={handleChange}
        placeholder="Selecciona una ciudad"
        styles={{
          menu: (provided) => ({
            ...provided,
            zIndex: 1000, // Puedes ajustar este valor para que sea superior al del mapa
          }),
        }}
      />
    </div>
  );
};

export default SearchBar;
