import { useCallback } from 'react';
import ReactGA from 'react-ga4';

const useTrackEvent = () => {

  const trackingId = import.meta.env.VITE_GA_TRACK_ID;

  // Inicializa Google Analytics si el ID existe
  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.error('Google Analytics Tracking ID is missing!');
  }

  const trackEvent = useCallback((category, action, label = '', value = 0) => {
    if (category && action) {
      ReactGA.event({
        category,  // Categoría del evento
        action,    // Acción realizada por el usuario
        label,     // Etiqueta opcional para más contexto
        value      // Valor opcional numérico del evento
      });
    } else {
      console.error('Category and action are required for tracking events.');
    }
  }, []);

  return trackEvent;
};

export default useTrackEvent;
