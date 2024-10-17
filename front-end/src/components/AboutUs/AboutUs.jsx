import image1 from '../../assets/drawkit-transport-scene-1.svg';
import image2 from '../../assets/drawkit-transport-scene-3.svg';
import image3 from '../../assets/drawkit-transport-scene-10.svg';
import { Helmet } from 'react-helmet-async'
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
            {/* Main container */}
            <div className="px-6 py-16 bg-white lg:px-32 lg:py-24">
                <article className="space-y-24 text-gray-900">
                    {/* Section 1 */}
                    <section className="flex flex-col items-center lg:flex-row lg:space-x-16 animate-fade-in-right">
                        <div className="space-y-8 lg:w-1/2">
                            <h1 className="text-3xl font-bold lg:text-4xl">¿Por qué FindMyPark?</h1>
                            <p className="text-lg leading-relaxed lg:text-xl">
                            Todo comenzó con una frustración que muchos hemos experimentado: viajar a una nueva ciudad y perder valiosos minutos, o incluso horas, en la tediosa búsqueda de un aparcamiento adecuado. Recuerdo varias ocasiones en las que el entusiasmo de descubrir un nuevo lugar se veía opacado por el estrés de no encontrar dónde dejar el coche sin pagar una fortuna o sin temor a restricciones de horarios. Fue en medio de esas situaciones, cuando me encontraba dando vueltas y vueltas por calles desconocidas, que empecé a pensar en una solución práctica que no solo me beneficiara a mí, sino también a todas aquellas personas que, como yo, disfrutan de la aventura de explorar nuevas ciudades. Así nació la idea de crear una herramienta que hiciera más sencilla y agradable la experiencia de viajar, eliminando la preocupación constante por encontrar aparcamiento. Quería ofrecer una alternativa que permitiera a los viajeros concentrarse en lo que realmente importa: descubrir y disfrutar cada rincón de los lugares que visitan.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-1/2">
                            <img className="shadow-lg rounded-3xl" src={image3} alt="Sobre nosotros" />
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="flex flex-col items-center lg:flex-row-reverse lg:space-x-reverse lg:space-x-16 animate-fade-in-left">
                        <div className="space-y-8 lg:w-1/2">
                            <h2 className="text-3xl font-bold lg:text-4xl">Nuestro objetivo</h2>
                            <p className="text-lg leading-relaxed lg:text-xl">
                            FindMyPark fue creado con el claro objetivo de ofrecer una plataforma efectiva y accesible para que las personas puedan consultar parkings gratuitos en distintas ciudades. La idea no solo surge de la necesidad de hacer más cómoda la experiencia de conducir en áreas urbanas, sino también de proporcionar una solución que ayude a ahorrar tiempo y dinero, factores esenciales en el día a día de cualquier viajero o residente. Además, FindMyPark tiene un fuerte compromiso con el medioambiente, ya que al facilitar la localización de parkings gratuitos y sin restricciones, reducimos el tiempo que los conductores pasan dando vueltas innecesarias por la ciudad. Esto no solo disminuye el estrés, sino que también contribuye a la reducción de emisiones de CO2, un paso pequeño pero significativo hacia una movilidad más sostenible. Queremos que cada vez más personas puedan acceder a esta herramienta, no solo para mejorar su experiencia al aparcar, sino también para hacer su parte en la protección del medio ambiente, apoyando una forma de transporte más eficiente y ecológica.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-1/2">
                            <img className="shadow-lg rounded-3xl" src={image1} alt="Nuestro objetivo" />
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="flex flex-col items-center lg:flex-row lg:space-x-16 animate-fade-in-right">
                        <div className="space-y-8 lg:w-1/2">
                            <h2 className="text-3xl font-bold lg:text-4xl">Ventajas de FindMyPark</h2>
                            <ul className="pl-5 space-y-4 text-lg leading-relaxed list-disc lg:text-xl">
                                <li><span className="font-semibold">Ahorro de Dinero:</span> Una de las mayores ventajas de FindMyPark es que te ayuda a encontrar parkings completamente gratuitos, lo que significa que puedes evitar el gasto innecesario en zonas de pago o en aparcamientos privados. Esto resulta especialmente beneficioso para quienes viajan con frecuencia o viven en áreas donde el aparcamiento puede ser costoso. Además, al reducir los costos asociados con el aparcamiento, se libera presupuesto para disfrutar más del destino o de las actividades planeadas.</li>
                                <li><span className="font-semibold">Comodidad:</span> Con FindMyPark, puedes planificar mejor tu ruta y evitar el estrés de llegar a una ciudad nueva sin saber dónde aparcar. Al tener acceso a una lista de parkings cercanos, puedes ahorrar tiempo y energía, eliminando la incertidumbre y permitiéndote disfrutar de tu viaje desde el momento en que llegas. Esto es ideal tanto para quienes están de paso como para los locales que necesitan una solución rápida y efectiva.</li>
                                <li><span className="font-semibold">Facilidad de Uso:</span> FindMyPark está diseñado pensando en la simplicidad y la experiencia del usuario. La plataforma es intuitiva y fácil de usar, lo que permite que cualquier persona, sin importar su nivel de conocimiento tecnológico, pueda encontrar rápidamente un parking cercano sin complicaciones. Con una interfaz amigable y clara, el proceso de búsqueda es rápido y eficiente.</li>
                                <li><span className="font-semibold">Ayuda al medioambiente:</span> Al reducir el tiempo que los conductores pasan buscando aparcamiento, FindMyPark también ayuda a disminuir la huella de carbono. Los vehículos emiten grandes cantidades de gases contaminantes al dar vueltas innecesarias en busca de un lugar donde estacionar. Al ofrecer una solución que acorta este proceso, contribuimos a una movilidad más sostenible, ayudando a disminuir las emisiones de CO2 y mejorando la calidad del aire en las ciudades. Además, al fomentar el uso de parkings gratuitos en lugar de áreas de pago o privadas, también se promueve un enfoque más responsable y consciente del uso del espacio urbano.</li>
                            </ul>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-1/2">
                            <img className="shadow-lg rounded-3xl" src={image2} alt="Ventajas" />
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-8 text-center">
                        <h3 className="text-3xl font-semibold lg:text-4xl">Park smart, park for free :)</h3>
                    </footer>
                </article>
            </div>
        </>
    );
};

export default AboutUs;
