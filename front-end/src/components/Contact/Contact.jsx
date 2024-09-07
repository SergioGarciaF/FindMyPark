import { useState } from "react";
import emailjs from "emailjs-com"; // Librería para enviar correos utilizando EmailJS
import image from '../../assets/drawkit-transport-scene-5.svg'; 
import Input from "../ui/Input"; 
import Button from "../ui/Button"; 
import { Helmet } from 'react-helmet'; // Librería para gestionar las etiquetas del <head>

const Contact = () => {
    const [mail, setMail] = useState('');
    const [userName, setUserName] = useState('');
    const [asunto, setAsunto] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [message, setMessage] = useState('');

    // Variables de entorno con los IDs necesarios para enviar el correo
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_USER_CONTACT_TEMPLATE;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // Función que maneja el envío del formulario
    const onSubmit = (e) => {
        e.preventDefault(); 

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

                
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            });
    };

    return (
        <>
            {/* Helmet para gestionar las meta etiquetas para SEO y redes sociales */}
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

            {/* Sección principal con el formulario de contacto */}
            <section className="flex flex-col items-center justify-center min-h-screen px-8 space-y-8 md:flex-row md:space-y-0">
                {/* Formulario de contacto */}
                <div className="flex flex-col w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-lg md:w-1/2">
                    <header>
                        <h1 className="text-2xl font-bold text-center md:text-3xl font-head">¡Ayúdanos a mejorar!</h1>
                    </header>
                    <p className="text-sm text-center md:text-base font-text">
                        ¿Has encontrado algún problema en un parking? ¿Conoces algún parking que no cumpla con los requisitos? ¿Tienes sugerencias para mejorar nuestra web? Tu opinión es muy importante para nosotros.
                        <br />
                        Por favor, rellena el formulario y cuéntanos cualquier incidencia o sugerencia que tengas. Juntos podemos hacer que la experiencia de nuestros usuarios sea aún mejor. ¡Gracias por colaborar!
                    </p>

                    {/* Formulario con campos de texto */}
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                        <Input text="Tu email" value={mail} onChange={setMail} />
                        <Input text="Tu nombre" value={userName} onChange={setUserName} />
                        <Input text="Asunto" value={asunto} onChange={setAsunto} />
                        <textarea
                            className="self-center w-full p-2 border border-gray-300 rounded md:w-1/2"
                            placeholder="Escribe tu mensaje"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            rows="4"
                        />
                        <Button text="Enviar" />
                    </form>

                    {/* Mensaje de confirmación de envío */}
                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>

                <aside className="order-last w-full md:w-1/2 md:order-first">
                    <img className="w-full" src={image} alt="Imagen de contacto" />
                </aside>
            </section>
        </>
    );
};

export default Contact;
