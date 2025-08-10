import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductoDetalle({ nombre, imagen, descripcion, composicion, uso, whatsappLink }) {
  const [expand, setExpand] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="producto-card group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 bg-white p-6 max-w-md mx-auto"
    >
      <img
  src={imagen}
  alt={nombre}
  className="w-full aspect-[3/4] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
/>


      <div className="mt-4 text-center">
        <h3 className="text-xl font-serif text-[#c6a25c] tracking-wide">{nombre}</h3>
        <p className="text-sm text-gray-700 mt-2">{descripcion}</p>

        {expand && (
          <div className="mt-4 text-sm text-gray-700 transition-opacity duration-500">
            <p><strong>Composición:</strong> {composicion}</p>
            <p><strong>Modo de uso:</strong> {uso}</p>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#c6a25c] text-[#c6a25c] font-serif text-sm rounded-full hover:bg-[#c6a25c] hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M...Z" /> {/* WhatsApp icon path */}
            </svg>
            Solicitar precio
          </a>

          <button
            onClick={() => setExpand(!expand)}
            className="px-4 py-2 border border-gray-400 text-gray-600 font-serif text-sm rounded-full hover:bg-gray-100 transition"
          >
            {expand ? 'Ocultar detalles' : 'Más información'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
