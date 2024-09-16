import { useState } from "react";
import emailjs from "emailjs-com"; // Librería para enviar emails utilizando el servicio de EmailJS
import image from '../../assets/drawkit-transport-scene-2.svg'; 
import Input from "../ui/Input"; 
import Button from "../ui/Button"; 
import { Helmet } from "react-helmet"; // Para gestionar las meta etiquetas del documento
import SecondaryMobileNavBar from '../SecondaryMobileNavBar/SecondaryMobileNavbar'

const Inform = () => {
   
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [parkName, setParkName] = useState('');
    const [url, setUrl] = useState('');
    const [cityName, setCityName] = useState('');
    const [message, setMessage] = useState('');

    // Variables de entorno que almacenan los IDs de EmailJS necesarios para el envío
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // Función que se ejecuta cuando se envía el formulario
    const onSubmit = (e) => {
        e.preventDefault(); 

        // Parámetros necesarios para enviar el email con la información proporcionada por el usuario
        const templateParams = {
            user_name: userName,
            user_mail: userMail,
            park_name: parkName,
            city_name: cityName,
            map_url: url
        };

        // Envío del email utilizando EmailJS
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text); // Log en caso de éxito
                setMessage('¡Correo enviado con éxito, gracias por ayudar a la comunidad!'); // Mensaje de éxito

                // Limpieza de los campos del formulario después de enviar el email
                setUserName('');
                setUserMail('');
                setUrl('');
                setParkName('');
                setCityName('');

                // Limpia el mensaje después de 4 segundos
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            })
            .catch((error) => {
                console.log('FAILED...', error); 
                setMessage('Error al enviar el correo :(. Por favor, inténtalo de nuevo.'); 
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            });
    };

    return (
        <>
            {/* Configuración de las etiquetas meta para SEO y compartir en redes sociales */}
            <Helmet>
                <title>Informar de un Parking Gratuito - FindMyPark</title>
                <meta
                    name="description"
                    content="Ayúdanos a mejorar nuestra base de datos de parkings gratuitos informando sobre estacionamientos que conozcas. Completa el formulario y haz tu contribución a la comunidad."
                />
                <meta
                    property="og:title"
                    content="Informa sobre parkings gratuitos en FindMyPark"
                />
                <meta
                    property="og:description"
                    content="¿Conoces un parking gratuito? Infórmanos sobre su ubicación para que lo añadamos a nuestra base de datos y ayudemos a la comunidad."
                />
                <meta property="og:url" content="https://tusitio.com/inform-data" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="informar parking, parking gratuito, sugerir parking, FindMyPark" />
            </Helmet>
            <SecondaryMobileNavBar/>
            {/* Sección principal con el formulario */}
            <section className="flex flex-col items-center justify-center min-h-screen px-8 space-y-8 md:flex-row md:space-y-0">
                {/* Contenedor del formulario */}
                <div className="flex flex-col w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-lg md:w-1/2">
                    <header>
                        <h1 className="text-4xl font-bold text-center md:text-3xl font-head">¿Conoces algún parking?</h1>
                    </header>
                    <p className="text-center text-md md:text-base font-text">
                        Si conoces algún parking gratuito que no esté en nuestra web, por favor, infórmanos a través de este formulario. Revisaremos tu sugerencia y lo añadiremos a nuestra base de datos para que toda la comunidad pueda beneficiarse. ¡Juntos hacemos de Find My Park un recurso mejor para todos!
                    </p>

                    {/* Formulario con los campos de entrada */}
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                        <Input text="Tu nombre" value={userName} onChange={setUserName} />
                        <Input text="Tu email" value={userMail} onChange={setUserMail} />
                        <Input text="Nombre del parking" value={parkName} onChange={setParkName} />
                        <Input text="Ciudad" value={cityName} onChange={setCityName} />
                        <Input text="URL Google maps" value={url} onChange={setUrl} />
                        <Button text="Enviar" />
                    </form>

                    {/* Mensaje de éxito o error */}
                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>

                <aside className="order-last w-full md:w-1/2 md:order-first">
                    <img className="w-full" src={image} alt="Imagen de información" />
                </aside>
            </section>
        </>
    );
};

export default Inform;
