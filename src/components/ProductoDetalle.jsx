import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductoDetalle({ nombre, imagen, descripcion, beneficios, activos, whatsappLink }) {
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
  <div className="mt-4 text-center text-sm text-gray-700 transition-opacity duration-500 space-y-4">
    {beneficios?.length > 0 && (
      <div>
        <h4 className="font-semibold text-[#1a1a1a] mb-1">Beneficios</h4>
        <ul className="list-disc list-inside inline-block text-left space-y-1">
          {beneficios.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    )}

    {activos?.length > 0 && (
  <div className="mt-4 text-center">
    <h4 className="text-sm font-semibold text-[#1a1a1a] mb-1">Activos</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 max-w-[90%] mx-auto text-left">
      {activos.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
    </ul>
  </div>
)}


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
