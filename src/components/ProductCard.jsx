// src/components/ProductCard.jsx
const ProductCard = ({ title, image, price }) => {
  const handleWhatsApp = () => {
    const msg = `Hola, quiero más información sobre ${title}`;
    window.open(`https://wa.me/5491161861142?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-[#1a1a1a]">{title}</h4>
        <p className="text-[#c2a67d] font-medium">${price}</p>
        <button
          onClick={handleWhatsApp}
          className="mt-4 bg-black text-white px-4 py-2 text-sm rounded hover:bg-[#1a1a1a] transition"
        >
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
