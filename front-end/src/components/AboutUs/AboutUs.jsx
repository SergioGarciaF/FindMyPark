import image1 from '../../assets/drawkit-transport-scene-1.svg';
import image2 from '../../assets/drawkit-transport-scene-3.svg';
import image3 from '../../assets/drawkit-transport-scene-10.svg';

const AboutUs = () => {
    return (
        <div className='px-4 md:mx-32'>
            <div className='flex flex-col w-full space-y-10 text-secondary'>
                {/* Primera sección */}
                <div className='flex flex-col items-center space-y-4 md:flex-row md:justify-between md:mx-auto md:w-full md:p-10 md:py-8'>
                    <div className='flex flex-col space-y-4 md:w-1/2'>
                        <h1 className='text-xl font-bold text-start md:text-4xl font-head'>¿Por qué Find My Park?</h1>
                        <p className='text-sm md:text-xl font-text'>
                            Todo comenzó con una frustración común: viajar a una nueva ciudad y pasar interminables minutos (¡o incluso horas!) buscando un lugar para aparcar sin éxito. Como muchos de nosotros, he experimentado esa sensación de estrés al no conocer la zona, dar vueltas en busca de un hueco libre y, al final, terminar pagando en un parking privado o en zonas de aparcamiento regulado como la zona azul o verde. Estas situaciones me llevaron a pensar en una solución que hiciera más sencilla y económica la vida de quienes, como yo, disfrutan de visitar nuevas ciudades en coche.
                        </p>
                    </div>
                    <img className='order-last w-full md:w-1/2 md:order-first' src={image3} alt='image-about-us' />
                </div>

                {/* Segunda sección */}
                <div className='flex flex-col items-center space-y-4 md:flex-row md:justify-around md:mx-auto'>
                    <div className='flex flex-col space-y-4 md:w-1/2'>
                        <h1 className='text-xl font-bold text-start md:text-4xl font-head'>Creación y objetivo de Find My Park</h1>
                        <p className='text-sm md:text-xl font-text'>
                            Fue en 2024 cuando decidí hacer algo al respecto y nació Find My Park. Este proyecto fue creado con un objetivo claro: ofrecer una plataforma sencilla y efectiva para que los usuarios puedan consultar parkings gratuitos y sin restricciones de horarios en diferentes ciudades. La idea es ayudar a las personas a ahorrar tiempo, dinero y a reducir el estrés que suele conllevar el aparcamiento en áreas urbanas desconocidas. Queremos ser la fuente confiable a la que puedas acudir antes de salir de casa o durante tu viaje, brindándote la tranquilidad de saber que podrás encontrar un lugar donde aparcar sin complicaciones.
                        </p>
                    </div>
                    <img className='order-last w-full md:w-1/2 md:order-first' src={image1} alt='image-about-us' />
                </div>

                {/* Tercera sección */}
                <div className='flex flex-col items-center space-y-4 md:flex-row md:justify-around md:mx-auto'>
                    <div className='flex flex-col space-y-4 md:w-1/2'>
                        <h1 className='text-xl font-bold text-start md:text-4xl font-head'>Ventajas de consultar parkings gratuitos en Find My Park</h1>
                        <ol className="m-4 space-y-2 text-sm list-decimal md:text-xl font-text">
                            <li>
                                <span className='font-bold text-buttonText'>Ahorro de Dinero</span>
                                : Nuestro servicio se centra en la búsqueda de parkings completamente gratuitos. No más sorpresas de último minuto con tarifas elevadas en parkings privados o de zona regulada.
                            </li>
                            <li>
                                <span className='font-bold text-buttonText'>Comodidad y Tranquilidad</span>
                                : Al conocer de antemano dónde están ubicados estos parkings gratuitos, puedes planificar mejor tu ruta y evitar el estrés de dar vueltas sin rumbo fijo en busca de un lugar donde dejar tu coche.
                            </li>
                            <li>
                                <span className='font-bold text-buttonText'>Actualización Constante</span>
                                : Trabajamos constantemente para actualizar y ampliar nuestra base de datos, asegurándonos de que siempre tengas acceso a la información más reciente sobre parkings disponibles en tu destino.
                            </li>
                            <li>
                                <span className='font-bold text-buttonText'>Accesibilidad y Facilidad de Uso</span>
                                : Nuestra web está diseñada para ser intuitiva y fácil de usar, permitiéndote buscar y encontrar parkings gratuitos con tan solo unos clics.
                            </li>
                        </ol>
                    </div>
                    <img className='order-last w-full md:w-1/2 md:order-first' src={image2} alt='image-about-us' />
                </div>

                {/* Frase final */}
                <h2 className='p-4 text-2xl font-bold text-center md:text-6xl font-head text-secondary'>Park smart, park for free :)</h2>
            </div>
        </div>
    );
};

export default AboutUs;
