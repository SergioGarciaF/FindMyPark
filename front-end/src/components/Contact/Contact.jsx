import { useState } from "react";
import emailjs from "emailjs-com";
import image from '../../assets/drawkit-transport-scene-5.svg';
import Input from "../ui/Input";
import Button from "../ui/Button";

const Contact = () => {
    const [mail, setMail] = useState('');
    const [userName, setUserName] = useState('');
    const [asunto, setAsunto] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [message, setMessage] = useState('');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_USER_CONTACT_TEMPLATE;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const onSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            user_mail: mail,
            user_name: userName,
            user_affair: asunto,
            user_message: userMessage
        };

        emailjs.send(serviceId, contactTemplateId, templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('¡Correo enviado con éxito, gracias por ayudar a la comunidad!');
                setMail('');
                setUserName('');
                setUserMessage('');
                setAsunto('');

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
                <h1 className="text-2xl font-bold text-center md:text-3xl font-head">¡Ayúdanos a mejorar!</h1>
                <p className="text-sm text-center md:text-base font-text">
                    ¿Has encontrado algún problema en un parking? ¿Conoces algún parking que no cumpla con los requisitos? ¿Tienes sugerencias para mejorar nuestra web? Tu opinión es muy importante para nosotros.
                    <br />
                    Por favor, rellena el formulario y cuéntanos cualquier incidencia o sugerencia que tengas. Juntos podemos hacer que la experiencia de nuestros usuarios sea aún mejor. ¡Gracias por colaborar!
                </p>
                <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                    <Input text="Tu email" value={mail} onChange={setMail} />
                    <Input text="Tu nombre" value={userName} onChange={setUserName} />
                    <Input text="Asunto" value={asunto} onChange={setAsunto} />
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe tu mensaje"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        rows="4" 
                    />
                    <Button text="Enviar" />
                </form>
                {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            </div>
            <img className="order-last w-full md:w-1/2 md:order-first" src={image} alt="Image contact" />
        </div>
    );
};

export default Contact;
