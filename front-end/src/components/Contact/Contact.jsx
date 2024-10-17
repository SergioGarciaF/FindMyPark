import { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import image from '../../assets/drawkit-transport-scene-5.svg';
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Helmet } from 'react-helmet-async';
import SecondaryMobileNavbar from "../SecondaryMobileNavBar/SecondaryMobileNavbar";

const Contact = () => {
    const [mail, setMail] = useState('');
    const [userName, setUserName] = useState('');
    const [asunto, setAsunto] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_USER_CONTACT_TEMPLATE;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if (!mail || !userName || !asunto || !userMessage) {
            setMessage('Por favor, rellena todos los campos.');
            return;
        }

        setIsSubmitting(true);

        const templateParams = {
            user_mail: mail,
            user_name: userName,
            user_affair: asunto,
            user_message: userMessage
        };

        emailjs.send(serviceId, contactTemplateId, templateParams, userId)
            .then(() => {
                setMessage('¡Correo enviado con éxito, gracias por contactarnos!');
                setIsSubmitting(false);
                setMail('');
                setUserName('');
                setAsunto('');
                setUserMessage('');
                setTimeout(() => setMessage(''), 4000);
            })
            .catch(() => {
                setMessage('Error al enviar el correo, por favor inténtalo de nuevo.');
                setIsSubmitting(false);
                setTimeout(() => setMessage(''), 4000);
            });
    }, [mail, userName, asunto, userMessage, serviceId, contactTemplateId, userId]);

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
            <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-background md:flex-row md:space-x-8">
                <div className="flex flex-col w-full max-w-2xl p-10 space-y-6 shadow-lg bg-background rounded-3xl md:w-1/2 md:animate-fade-in-down">
                    <header>
                        <h1 className="text-4xl font-semibold text-center font-title text-secondary">¡Ayúdanos a mejorar!</h1>
                    </header>
                    <p className="text-lg text-center font-text text-secondary">
                        ¿Has encontrado algún problema en un parking? ¿Conoces algún parking que no cumpla con los requisitos? ¿Alguna mejora para la web? Tu opinión es importante para nosotros.
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col space-y-6">
                        <Input text="Tu nombre" value={userName} onChange={setUserName} aria-label="Nombre" />
                        <Input text="Tu email" value={mail} onChange={setMail} aria-label="Email" />
                        <Input text="Asunto" value={asunto} onChange={setAsunto} aria-label="Asunto" />
                        <textarea
                            className="w-full p-3 border rounded-lg shadow-sm border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Escribe tu mensaje"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            rows="4"
                            aria-label="Mensaje"
                            required
                        />
                        <Button
                            text={isSubmitting ? "Enviando..." : "Enviar"}
                            disabled={isSubmitting}
                            className="w-full py-3 text-white rounded-full shadow focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </form>

                    {message && <p className="mt-4 text-sm text-center text-green-600">{message}</p>}
                </div>

                <aside className="w-full mt-8 md:w-1/2 md:mt-0 md:animate-fade-in-left">
                    <img className="w-full h-auto" src={image} alt="Imagen de contacto" />
                </aside>
            </section>
        </>
    );
};

export default Contact;
