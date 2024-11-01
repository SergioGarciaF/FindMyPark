import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Contact from "../components/Contact/Contact";
import emailjs from "emailjs-com";
import { HelmetProvider } from "react-helmet-async"; 
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // Importa jest-dom para usar toBeInTheDocument

// Mockeamos emailjs para controlar su comportamiento en el test
vi.mock("emailjs-com", () => ({
    default: {
        send: vi.fn(),
    },
}));

describe("Formulario de contacto", () => {
    beforeEach(() => {
        emailjs.send.mockClear();
    });

    test("envía un aviso de rellenar campos cuando falta alguno de los campos", async () => {
      render(
          <HelmetProvider>
              <MemoryRouter>
                  <Contact />
              </MemoryRouter>
          </HelmetProvider>
      );
  
      const nameInput = screen.getByLabelText(/nombre/i);
      const emailInput = screen.getByLabelText(/email/i);
      const subjectInput = screen.getByLabelText(/asunto/i);
      const messageTextarea = screen.getByLabelText(/mensaje/i);
      const submitButton = screen.getByRole("button", { name: /enviar/i });
  
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
      fireEvent.change(subjectInput, { target: { value: "" } }); // Campo vacío
      fireEvent.change(messageTextarea, { target: { value: "Este es un mensaje de prueba." } });
  
      emailjs.send.mockResolvedValueOnce();
  
      fireEvent.click(submitButton);
  
      // Espera a que el mensaje de aviso aparezca y verifica que emailjs.send no fue llamado
      await waitFor(() => {
          expect(emailjs.send).not.toHaveBeenCalled();
      });
  
      // Verifica que se muestra el mensaje de aviso
      expect(screen.getByText(/Por favor, rellena todos los campos./i)).toBeInTheDocument();
  });
  

    test("envía el mensaje correctamente cuando se rellenan todos los campos", async () => {
      render(
          <HelmetProvider>
              <MemoryRouter>
                  <Contact />
              </MemoryRouter>
          </HelmetProvider>
      );

      const nameInput = screen.getByLabelText(/nombre/i);
      const emailInput = screen.getByLabelText(/email/i);
      const subjectInput = screen.getByLabelText(/asunto/i);
      const messageTextarea = screen.getByLabelText(/mensaje/i);
      const submitButton = screen.getByRole("button", { name: /enviar/i });

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
      fireEvent.change(subjectInput, { target: { value: "Consulta" } });
      fireEvent.change(messageTextarea, { target: { value: "Este es un mensaje de prueba." } });

      emailjs.send.mockResolvedValueOnce();

      fireEvent.click(submitButton);

      await waitFor(() => {
          expect(emailjs.send).toHaveBeenCalledWith(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_USER_CONTACT_TEMPLATE,
              {
                  user_mail: "johndoe@example.com",
                  user_name: "John Doe",
                  user_affair: "Consulta",
                  user_message: "Este es un mensaje de prueba.",
              },
              import.meta.env.VITE_EMAILJS_USER_ID
          );
      });

      expect(screen.getByText(/¡Correo enviado con éxito, gracias por contactarnos!/i)).toBeInTheDocument();
  });
});
