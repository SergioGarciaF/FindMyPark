import image1 from '../../assets/drawkit-transport-scene-1.svg';
import image2 from '../../assets/drawkit-transport-scene-3.svg';
import image3 from '../../assets/drawkit-transport-scene-10.svg';
import { Helmet } from 'react-helmet';
import SecondaryMobileNavbar from '../SecondaryMobileNavBar/SecondaryMobileNavbar';

const AboutUs = () => {
    return (
        <>
          <Helmet>
            {/* Meta tags */}
            <title>¿Qué es FindMyPark? - Conoce Nuestra Historia y Objetivo</title>
            {/* Otros metadatos */}
          </Helmet>
    
          <SecondaryMobileNavbar />
    
          <div className="px-4 py-8 md:px-12 md:py-16">
            <article className="flex flex-col w-full space-y-10 text-secondary">
              
              {/* Primera sección */}
              <section className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">¿Por qué FindMyPark?</h1>
                  <p className="text-gray-700 text-md md:text-xl">
                  Todo comenzó con una frustración común: viajar a una nueva ciudad y pasar interminables minutos (¡o incluso horas!) buscando un lugar para aparcar sin éxito. Como muchos de nosotros, he experimentado esa sensación de estrés al no conocer la zona, dar vueltas en busca de un hueco libre y, al final, terminar pagando en un parking privado o en zonas de aparcamiento regulado como la zona azul o verde. Estas situaciones me llevaron a pensar en una solución que hiciera más sencilla y económica la vida de quienes, como yo, disfrutan de visitar nuevas ciudades en coche.
                  </p>
                </div>
                <img className="w-full rounded-lg shadow-md md:w-3/4" src={image3} alt="Sobre nosotros" />
              </section>
    
              {/* Segunda sección */}
              <section className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Creación y objetivo de FindMyPark</h2>
                  <p className="text-gray-700 text-md md:text-xl">
                  Fue en 2024 cuando decidí hacer algo al respecto y nació Find My Park. Este proyecto fue creado con un objetivo claro: ofrecer una plataforma sencilla y efectiva para que los usuarios puedan consultar parkings gratuitos y sin restricciones de horarios en diferentes ciudades. La idea es ayudar a las personas a ahorrar tiempo, dinero y a reducir el estrés que suele conllevar el aparcamiento en áreas urbanas desconocidas. Queremos ser la fuente confiable a la que puedas acudir antes de salir de casa o durante tu viaje, brindándote la tranquilidad de saber que podrás encontrar un lugar donde aparcar sin complicaciones.
                  </p>
                </div>
                <img className="w-full rounded-lg shadow-md md:w-3/4" src={image1} alt="Creación y objetivo" />
              </section>
    
              {/* Tercera sección */}
              <section className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ventajas de FindMyPark</h2>
                  <ol className="space-y-4 text-gray-700 list-decimal text-md md:text-xl">
                  <li>
                                    <span className="font-bold text-buttonText">Ahorro de Dinero</span>
                                    : Nuestro servicio se centra en la búsqueda de parkings completamente gratuitos. No más sorpresas de último minuto con tarifas elevadas en parkings privados o de zona regulada.
                                </li>
                                <li>
                                    <span className="font-bold text-buttonText">Comodidad y Tranquilidad</span>
                                    : Al conocer de antemano dónde están ubicados estos parkings gratuitos, puedes planificar mejor tu ruta y evitar el estrés de dar vueltas sin rumbo fijo en busca de un lugar donde dejar tu coche.
                                </li>
                                <li>
                                    <span className="font-bold text-buttonText">Actualización Constante</span>
                                    : Trabajamos constantemente para actualizar y ampliar nuestra base de datos, asegurándonos de que siempre tengas acceso a la información más reciente sobre parkings disponibles en tu destino.
                                </li>
                                <li>
                                    <span className="font-bold text-buttonText">Accesibilidad y Facilidad de Uso</span>
                                    : Nuestra web está diseñada para ser intuitiva y fácil de usar, permitiéndote buscar y encontrar parkings gratuitos con tan solo unos clics.
                                </li>
                  </ol>
                </div>
                <img className="w-full rounded-lg shadow-md md:w-3/4" src={image2} alt="Ventajas" />
              </section>
    
              {/* Footer */}
              <footer className="p-8 text-white bg-primary">
                <h3 className="text-2xl font-bold text-center md:text-6xl">Park smart, park for free :)</h3>
              </footer>
            </article>
          </div>
        </>
      );
};

export default AboutUs;
