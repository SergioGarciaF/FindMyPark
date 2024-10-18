import { useEffect } from "react";
import ReactGA from "react-ga4";

const usePageTracking = (pageTitle = "Default Title") => {
  useEffect(() => {
    // Tracking directamente de las variables de entorno
    const trackingId = import.meta.env.VITE_GA_TRACK_ID;

    if (trackingId) {
      // Inicializamos GA4 solo si tenemos un tracking ID
      ReactGA.initialize(trackingId);

      // Enviamos el evento de visualización de página
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: pageTitle });
    } else {
      console.warn("Google Analytics Tracking ID is missing");
    }
  }, [pageTitle]);
};

export default usePageTracking;
