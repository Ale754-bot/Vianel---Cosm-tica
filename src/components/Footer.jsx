// src/components/Footer.jsx
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Girasol from '/17179.png';
import Duena from '/17180.png'; // Asegurate de que el path sea correcto

const Footer = () => {
  return (
    <footer className="relative bg-white text-black py-18 px-6 mt-20 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Girasol centrado */}
        <img
          src={Girasol}
          alt="Girasol decorativo"
          className="absolute left-1/2 transform -translate-x-1/2 opacity-5 w-72 h-72 object-contain mix-blend-multiply"
          style={{ top: '-20px' }}
        />

        {/* Imagen de la dueña desde mitad hacia la derecha, enfocada más abajo */}
        <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
          <img
            src={Duena}
            alt="Dueña de VIANEL"
            className="w-full h-full object-cover opacity-35 grayscale"
            style={{
              objectPosition: 'center 10%',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent)',
              maskImage: 'linear-gradient(to left, black 40%, transparent)',
            }}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <h3 className="text-xl font-serif mb-2">VIANEL</h3>
          <p className="text-sm text-gray-400">
            Tu piel, nuestra inspiración.
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-2">
          <p className="text-sm text-gray-400">
            ¿Querés hablar con nosotros? Estamos a un mensaje de distancia.
          </p>
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

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8 relative z-10">
        &copy; {new Date().getFullYear()} VIANEL. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
