// Importamos el componente Select de 'react-select' para crear un menú desplegable personalizado
import Select from 'react-select';
import { cities } from '../../constants/cities'; 


const SearchBar = ({ onSearch }) => {

  // Mapeamos el array de ciudades para crear una lista de opciones que react-select pueda entender
  const cityOptions = cities.map(city => ({
    value: city.name, 
    label: city.name  
  }));

  const handleChange = (selectedOption) => {
    // Si hay una opción seleccionada, llamamos a la función onSearch pasando el valor de la ciudad seleccionada
    if (selectedOption) {
      onSearch(selectedOption.value);
    }
  };

  return (

    <section className="relative w-full">
      {/* Etiqueta invisible para accesibilidad */}
      <label htmlFor="city-select" className="sr-only">Escribe una ciudad</label>
      
      {/* Componente Select de react-select que recibe las opciones y la función manejadora */}
      <Select
        id="city-select" // ID para asociar con la etiqueta <label>
        options={cityOptions} // Lista de opciones generadas a partir de las ciudades
        onChange={handleChange} // Función que se ejecuta al cambiar la opción seleccionada
        placeholder="Escribe una ciudad" // Texto mostrado como placeholder
        styles={{
          // Ajuste de estilo para que el menú desplegable tenga un índice z elevado
          menu: (provided) => ({
            ...provided,
            zIndex: 1000, // Esto asegura que el menú esté por encima de otros elementos
          }),
        }}
      />
    </section>
  );
};

export default SearchBar;
