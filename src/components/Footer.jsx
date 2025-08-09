// src/components/Footer.jsx
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-serif mb-2">VIANEL</h3>
          <p className="text-sm text-gray-400">
            Tu piel, nuestra inspiración.
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-2">
          <p className="text-sm text-gray-400">¿Querés hablar con nosotros? Estamos a un mensaje de distancia.</p>
          <div className="flex space-x-4 text-[#c6a25c] text-lg">
            <a href="https://wa.me/5491161861142" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:contacto@vianel.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} VIANEL. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
