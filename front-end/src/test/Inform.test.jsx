import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Inform from "../components/Inform/Inform";
import emailjs from "emailjs-com";
import { HelmetProvider } from "react-helmet-async"; 
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

vi.mock("emailjs-com", () => ({
    default: {
        send: vi.fn(),
    },
}));

describe("Informar de un parking", () => {
    beforeEach(() => {
        emailjs.send.mockClear();
    });

    test("envía un aviso de rellenar campos cuando falta alguno de los campos", async () => {
        render(
            <HelmetProvider>
                <MemoryRouter>
                    <Inform />
                </MemoryRouter>
            </HelmetProvider>
        );

        const nameInput = screen.getByLabelText(/nombre/i);
        const emailInput = screen.getByLabelText(/email/i);
        const parkingInput = screen.getByLabelText(/parking/i);
        const cityInput = screen.getByLabelText(/ciudad/i);
        const urlInput = screen.getByLabelText(/url/i);
        const submitButton = screen.getByRole("button", { name: /enviar/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
        fireEvent.change(parkingInput, { target: { value: "Parking" } });
        fireEvent.change(cityInput, { target: { value: "" } });
        fireEvent.change(urlInput, { target: { value: "www.google.es" } });
        emailjs.send.mockResolvedValueOnce();

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(emailjs.send).not.toHaveBeenCalled();
        });

        expect(screen.getByText(/Por favor, rellena todos los campos./i)).toBeInTheDocument();
    });

    test("envía el mensaje correctamente cuando se rellenan todos los campos", async () => {
        render(
            <HelmetProvider>
                <MemoryRouter>
                    <Inform />
                </MemoryRouter>
            </HelmetProvider>
        );

        const nameInput = screen.getByLabelText(/nombre/i);
        const emailInput = screen.getByLabelText(/email/i);
        const parkingInput = screen.getByLabelText(/parking/i);
        const cityInput = screen.getByLabelText(/ciudad/i);
        const urlInput = screen.getByLabelText(/url/i);
        const submitButton = screen.getByRole("button", { name: /enviar/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
        fireEvent.change(parkingInput, { target: { value: "Parking" } });
        fireEvent.change(cityInput, { target: { value: "Barcelona" } });
        fireEvent.change(urlInput, { target: { value: "www.google.es" } });

        emailjs.send.mockResolvedValueOnce();

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledWith(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    user_name: "John Doe",
                    user_mail: "johndoe@example.com",
                    park_name: "Parking",
                    city_name: "Barcelona",
                    map_url: "www.google.es",
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            );
        });

        expect(screen.getByText(/¡Correo enviado con éxito, gracias por ayudar a la comunidad!/i)).toBeInTheDocument();
    });
});
