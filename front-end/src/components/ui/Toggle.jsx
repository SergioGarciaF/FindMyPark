import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../darkMode'; 

const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleSwitch = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="flex items-center justify-center h-6">
      <div 
        onClick={toggleSwitch}
        className={`relative w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          darkMode ? 'bg-buttonText' : 'bg-gray-300'
        }`}
      >
        <div 
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-5' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
