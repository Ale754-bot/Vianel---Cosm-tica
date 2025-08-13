import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductoHome({ nombre, imagen, subtitulo }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className="producto-home text-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 p-6 group"
    >
      <img
        src={imagen}
        alt={nombre}
        className="w-full object-cover rounded-md transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <h3 className="text-lg font-serif mt-4 text-[#1a1a1a]">{nombre}</h3>
      <p className="text-sm italic text-[#c6a25c]">{subtitulo}</p>

      <button
        onClick={() => navigate('/products')}
        className="mt-4 inline-block px-4 py-2 border border-[#c6a25c] text-[#c6a25c] font-serif text-sm rounded-full hover:bg-[#c6a25c] hover:text-white transition"
      >
        Ver más
      </button>
    </motion.div>
  );
}
