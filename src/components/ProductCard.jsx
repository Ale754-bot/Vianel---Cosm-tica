// src/components/ProductCard.jsx
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ title, image, description, slug }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-serif text-[#c6a25c] mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button
  onClick={() => navigate('/products')}
  className="inline-block px-4 py-2 border border-[#c6a25c] text-[#c6a25c] font-serif text-sm rounded-full hover:bg-[#c6a25c] hover:text-white transition"
>
  Ver más
</button>

      </div>
    </div>
  );
};

export default ProductCard;
