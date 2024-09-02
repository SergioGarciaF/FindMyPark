import { useState } from "react";
import emailjs from "emailjs-com";
import image from '../../assets/drawkit-transport-scene-2.svg';
import Input from "../ui/Input";
import Button from "../ui/Button";

const Inform = () => {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [parkName, setParkName] = useState('');
    const [url, setUrl] = useState('');
    const [cityName, setCityName] = useState('');
    const [message, setMessage] = useState('');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const onSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado de recargar la página

        const templateParams = {
            user_name: userName,
            user_mail: userMail,
            park_name: parkName,
            city_name: cityName,
            map_url: url
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('¡Correo enviado con éxito, gracias por ayudar a la comunidad!');
                setUserName('');
                setUserMail('');
                setUrl('');
                setParkName('');
                setCityName('');

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
        <div className="flex flex-col items-center justify-center min-h-screen px-8 space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-lg md:w-1/2">
                <h1 className="text-2xl font-bold text-center md:text-3xl font-head">¿Conoces algún parking?</h1>
                <p className="text-sm text-center md:text-base font-text">
                    Si conoces algún parking gratuito que no esté en nuestra web, por favor, infórmanos a través de este formulario. Revisaremos tu sugerencia y lo añadiremos a nuestra base de datos para que toda la comunidad pueda beneficiarse. ¡Juntos hacemos de Find My Park un recurso mejor para todos!
                </p>
                <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                    <Input text="Tu nombre" value={userName} onChange={setUserName} />
                    <Input text="Tu email" value={userMail} onChange={setUserMail} />
                    <Input text="Nombre del parking" value={parkName} onChange={setParkName} />
                    <Input text="Ciudad" value={cityName} onChange={setCityName} />
                    <Input text="URL Google maps" value={url} onChange={setUrl} />
                    <Button text="Enviar" />
                </form>
                {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            </div>
            <img className="order-last w-full md:w-1/2 md:order-first" src={image} alt="Image inform" />
        </div>
    );
};

export default Inform;
