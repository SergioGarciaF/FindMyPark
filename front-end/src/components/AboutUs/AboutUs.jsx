import image1 from '../../assets/drawkit-transport-scene-1.svg';
import image2 from '../../assets/drawkit-transport-scene-3.svg';
import image3 from '../../assets/drawkit-transport-scene-10.svg';
import {Helmet} from 'react-helmet-async'
import SecondaryMobileNavbar from '../SecondaryMobileNavBar/SecondaryMobileNavbar';

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>¿Qué es FindMyPark? - Conoce Nuestra Historia y Objetivo</title>

                {/* Meta descripción optimizada */}
                <meta
                    name="description"
                    content="Conoce la historia y objetivo de FindMyPark. Descubre cómo ayudamos a conductores a encontrar parkings gratuitos, ahorrando tiempo y dinero en cada ciudad."
                />

                {/* Etiquetas Open Graph */}
                <meta property="og:title" content="¿Qué es FindMyPark? - Conoce Nuestra Historia y Objetivo" />
                <meta
                    property="og:description"
                    content="Descubre por qué creamos FindMyPark y cómo te ayudamos a encontrar parkings gratuitos en diferentes ciudades."
                />
                <meta property="og:image" content="https://tusitio.com/logo.png" />
                <meta property="og:url" content="https://tusitio.com/about-us" />
                <meta property="og:type" content="website" />

                {/* Etiquetas para Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="¿Qué es FindMyPark? - Conoce Nuestra Historia y Objetivo" />
                <meta name="twitter:description" content="Aprende cómo FindMyPark te ayuda a encontrar parkings gratuitos en distintas ciudades." />
                <meta name="twitter:image" content="https://tusitio.com/logo.png" />

                {/* Schema.org (Estructura de datos) */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "FindMyPark",
                            "url": "https://tusitio.com",
                            "logo": "https://tusitio.com/logo.png",
                            "description": "FindMyPark ayuda a los usuarios a encontrar estacionamientos gratuitos cerca de ellos.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-800-555-5555",
                                "contactType": "Customer service"
                            }
                        }
                    `}
                </script>
            </Helmet>

            <SecondaryMobileNavbar />

            <div className="px-6 py-12 md:ml-20 md:px-16 md:py-20 bg-gray-50">
                <article className="flex flex-col space-y-16 text-secondary">
                    {/* Primera sección */}
                    <section className="grid items-center grid-cols-1 gap-12 animate-fade-in-right md:grid-cols-2">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">¿Por qué FindMyPark?</h1>
                            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                                Todo comenzó con una frustración común: viajar a una nueva ciudad y pasar interminables minutos (¡o incluso horas!) buscando un lugar para aparcar sin éxito. 
                                Estas situaciones me llevaron a pensar en una solución que hiciera más sencilla y económica la vida de quienes, como yo, disfrutan de visitar nuevas ciudades en coche.
                            </p>
                        </div>
                        <img className="w-full shadow-lg rounded-3xl md:w-3/4" src={image3} alt="Sobre nosotros" />
                    </section>

                    {/* Segunda sección */}
                    <section className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 animate-fade-in-left">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Creación y objetivo de FindMyPark</h2>
                            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                                Find My Park fue creado en 2024 con un objetivo claro: ofrecer una plataforma sencilla y efectiva para consultar parkings gratuitos en diferentes ciudades. 
                                Ayudamos a las personas a ahorrar tiempo, dinero y reducir el estrés que conlleva el aparcamiento en áreas urbanas desconocidas.
                            </p>
                        </div>
                        <img className="w-full shadow-lg rounded-3xl md:w-3/4" src={image1} alt="Creación y objetivo" />
                    </section>

                    {/* Tercera sección */}
                    <section className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 animate-fade-in-right ">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Ventajas de FindMyPark</h2>
                            <ol className="space-y-4 text-lg leading-relaxed text-gray-600 list-decimal md:text-xl">
                                <li>
                                    <span className="font-bold text-primary">Ahorro de Dinero</span>: Encontramos parkings completamente gratuitos.
                                </li>
                                <li>
                                    <span className="font-bold text-primary">Comodidad y Tranquilidad</span>: Puedes planificar mejor tu ruta sin estrés.
                                </li>
                                <li>
                                    <span className="font-bold text-primary">Actualización Constante</span>: Base de datos siempre al día.
                                </li>
                                <li>
                                    <span className="font-bold text-primary">Facilidad de Uso</span>: Plataforma intuitiva y fácil de usar.
                                </li>
                            </ol>
                        </div>
                        <img className="w-full shadow-lg rounded-3xl md:w-3/4" src={image2} alt="Ventajas" />
                    </section>

                    {/* Footer */}
                    <footer className="p-8 text-white bg-gray-900 rounded-lg">
                        <h3 className="text-3xl font-bold text-center md:text-5xl">Park smart, park for free :)</h3>
                    </footer>
                </article>
            </div>
        </>
    );
};

export default AboutUs;
