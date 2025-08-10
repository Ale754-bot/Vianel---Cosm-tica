import { useNavigate } from 'react-router-dom';

export default function ProductoHome({ nombre, imagen, subtitulo }) {
  const navigate = useNavigate();

  return (
    <div className="producto-home text-center">
      <img src={imagen} alt={nombre} className="w-full object-cover rounded-md" />
      <h3 className="text-lg font-serif mt-4">{nombre}</h3>
      <p className="text-sm italic text-[#c6a25c]">{subtitulo}</p>

      <button
        onClick={() => navigate('/products')}
        className="mt-4 inline-block px-4 py-2 border border-[#c6a25c] text-[#c6a25c] font-serif text-sm rounded-full hover:bg-[#c6a25c] hover:text-white transition"
      >
        Ver más
      </button>
    </div>
  );
}
