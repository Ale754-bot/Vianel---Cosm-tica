import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductoDetalle({ id, nombre, imagen, descripcion, beneficios, activos, whatsappLink }) {
  const [expand, setExpand] = useState(false);

  return (
    <motion.div
      id={id} // ✅ Esto permite que el scroll desde Home funcione
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-[1em] w-[1em] align-middle"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.506 2.031 7.875L0 32l8.313-2.031A15.902 15.902 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.625 0-5.063-.75-7.188-2.063l-.5-.313-4.938 1.219 1.313-4.813-.313-.5C3.75 21.063 3 18.625 3 16 3 8.813 8.813 3 16 3s13 5.813 13 13-5.813 13-13 13zm7.25-9.313c-.375-.188-2.25-1.125-2.625-1.25-.375-.125-.625-.188-.875.188s-1 1.25-1.25 1.5c-.25.25-.5.281-.875.094-.375-.188-1.625-.625-3.094-2-1.125-1-1.875-2.25-2.094-2.625-.219-.375-.023-.563.164-.75.156-.156.375-.406.563-.625.188-.219.25-.375.375-.625.125-.25.063-.469 0-.656-.063-.188-.875-2.125-1.188-2.875-.313-.75-.625-.625-.875-.625h-.75c-.25 0-.656.094-1 .469s-1.313 1.281-1.313 3.125 1.344 3.625 1.531 3.875c.188.25 2.625 4 6.375 5.625.891.375 1.584.594 2.125.75.891.281 1.7.25 2.344.156.719-.094 2.25-.906 2.563-1.781.313-.875.313-1.625.219-1.781-.094-.156-.344-.25-.719-.438z" />
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
