import { useState } from "react";
import emailjs from "emailjs-com";
import image from '../../assets/drawkit-transport-scene-2.svg'; 
import Input from "../ui/Input"; 
import Button from "../ui/Button"; 
import {Helmet} from 'react-helmet-async'
import SecondaryMobileNavBar from '../SecondaryMobileNavBar/SecondaryMobileNavbar';

const Inform = () => {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [parkName, setParkName] = useState('');
    const [url, setUrl] = useState('');
    const [cityName, setCityName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!userName || !userMail || !parkName || !cityName || !url) {
            setMessage('Por favor, rellena todos los campos.');
            return;
        }
        setIsSubmitting(true);

        const templateParams = {
            user_name: userName,
            user_mail: userMail,
            park_name: parkName,
            city_name: cityName,
            map_url: url
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(() => {
                setMessage('¡Correo enviado con éxito, gracias por ayudar a la comunidad!');
                setIsSubmitting(false);
                setUserName('');
                setUserMail('');
                setParkName('');
                setCityName('');
                setUrl('');
                setTimeout(() => setMessage(''), 4000);
            })
            .catch(() => {
                setMessage('Error al enviar el correo. Por favor, inténtalo de nuevo.');
                setIsSubmitting(false);
                setTimeout(() => setMessage(''), 4000);
            });
    };

    return (
        <>
            <Helmet>
                <title>Informar de un Parking Gratuito - FindMyPark</title>
                <meta
                    name="description"
                    content="Ayúdanos a mejorar nuestra base de datos de parkings gratuitos informando sobre estacionamientos que conozcas."
                />
                <meta property="og:title" content="Informa sobre parkings gratuitos en FindMyPark" />
                <meta property="og:description" content="Informa de parkings gratuitos y ayuda a la comunidad." />
                <meta property="og:url" content="https://tusitio.com/inform-data" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://tusitio.com/assets/inform-image.jpg" />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="informar parking, parking gratuito, sugerir parking, FindMyPark" />
                <link rel="canonical" href="https://tusitio.com/inform-data" />
            </Helmet>

            <SecondaryMobileNavBar />

            <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 md:flex-row md:space-x-8">
                <div className="flex flex-col w-full max-w-2xl p-10 space-y-6 bg-white shadow-lg rounded-3xl md:w-1/2 md:animate-fade-in-down">
                    <header>
                        <h1 className="text-4xl font-semibold text-center font-title text-secondary">¿Conoces algún parking?</h1>
                    </header>
                    <p className="text-lg text-center font-text text-secondary">
                        Infórmanos sobre un parking gratuito que conozcas y contribuye a mejorar nuestra base de datos para el beneficio de toda la comunidad. ¡Gracias por tu colaboración!
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col space-y-6">
                        <Input text="Tu nombre" value={userName} onChange={setUserName} />
                        <Input text="Tu email" value={userMail} onChange={setUserMail} />
                        <Input text="Nombre del parking" value={parkName} onChange={setParkName} />
                        <Input text="Ciudad" value={cityName} onChange={setCityName} />
                        <Input text="URL Google maps" value={url} onChange={setUrl} />
                        <Button
                            text={isSubmitting ? "Enviando..." : "Enviar"}
                            disabled={isSubmitting}
                            className="w-full py-3 text-white bg-blue-600 rounded-full shadow hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </form>

                    {message && <p className="mt-4 text-sm text-center text-green-600">{message}</p>}
                </div>

                <aside className="w-full mt-8 md:w-1/2 md:mt-0 md:animate-fade-in-left">
                    <img className="w-full h-auto" src={image} alt="Imagen de información" />
                </aside>
            </section>
        </>
    );
};

export default Inform;
