import { useState } from "react";
import emailjs from "emailjs-com"; // Librería para enviar correos utilizando EmailJS
import image from '../../assets/drawkit-transport-scene-5.svg'; 
import Input from "../ui/Input"; 
import Button from "../ui/Button"; 
import { Helmet } from 'react-helmet'; // Librería para gestionar las etiquetas del <head>
import SecondaryMobileNavbar from "../SecondaryMobileNavBar/SecondaryMobileNavbar";


const Contact = () => {
    const [mail, setMail] = useState('');
    const [userName, setUserName] = useState('');
    const [asunto, setAsunto] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    // Variables de entorno con los IDs necesarios para enviar el correo
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_USER_CONTACT_TEMPLATE;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // Función que maneja el envío del formulario
    const onSubmit = (e) => {
        e.preventDefault(); 

        if (!mail || !userName || !asunto || !userMessage) {
            setMessage('Por favor, rellena todos los campos.');
            return;
        }
        
        setIsSubmitting(true)

        // Parámetros para enviar a EmailJS con los datos del formulario
        const templateParams = {
            user_mail: mail,
            user_name: userName,
            user_affair: asunto,
            user_message: userMessage
        };

        // Enviar correo electrónico a través de EmailJS
        emailjs.send(serviceId, contactTemplateId, templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text); 
                setMessage('¡Correo enviado con éxito, gracias por ayudar a la comunidad!'); // Mensaje de éxito
                setIsSubmitting(false);
                // Limpiar los campos del formulario
                setMail('');
                setUserName('');
                setUserMessage('');
                setAsunto('');

                // Limpiar mensaje de éxito después de 4 segundos
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            })
            .catch((error) => {
                console.log('FAILED...', error); 
                setMessage('Error al enviar el correo :(. Por favor, inténtalo de nuevo.'); 
                setIsSubmitting(false);
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            });
    };

    return (
        <>
            <Helmet>
                <title>Contacto - FindMyPark</title>
                <meta
                    name="description"
                    content="Ponte en contacto con nosotros para obtener más información sobre cómo encontrar parkings gratuitos cerca de ti."
                />
                <meta property="og:title" content="Contáctanos - FindMyPark" />
                <meta
                    property="og:description"
                    content="¿Tienes alguna duda? Ponte en contacto con el equipo de FindMyPark para resolver tus consultas sobre estacionamientos gratuitos."
                />
                <meta property="og:url" content="https://tusitio.com/contact" />
                <meta property="og:type" content="website" />
            </Helmet>
            <SecondaryMobileNavbar />
            <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-12 md:space-y-0 md:flex-row md:gap-16 bg-gray-50">
                {/* Formulario de contacto */}
                <div className="flex flex-col w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center text-gray-800 md:text-3xl">¡Ayúdanos a mejorar!</h1>
                    <p className="text-center text-gray-600 text-md md:text-base">
                        ¿Has encontrado algún problema en un parking? ¿Conoces algún parking que no cumpla con los requisitos? Tu opinión es importante para nosotros.
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                        <Input
                            text="Tu email"
                            value={mail}
                            onChange={setMail}
                            type="email"
                            required
                            placeholder="tucorreo@ejemplo.com"
                        />
                        <Input
                            text="Tu nombre"
                            value={userName}
                            onChange={setUserName}
                            required
                            placeholder="Tu nombre completo"
                        />
                        <Input
                            text="Asunto"
                            value={asunto}
                            onChange={setAsunto}
                            required
                            placeholder="Asunto del mensaje"
                        />
                        <textarea
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Escribe tu mensaje"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            rows="4"
                            required
                        />
                        <Button
                            text={isSubmitting ? "Enviando" : "Enviar"}
                            disabled={isSubmitting}
                        />
                    </form>

                    {/* Mensaje de confirmación o error */}
                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>

                {/* Imagen de contacto */}
                <div className="hidden md:block md:w-1/2">
                    <img className="w-full max-w-sm mx-auto" src={image} alt="Imagen de contacto" />
                </div>
            </section>
        </>
    );
};

export default Contact;
