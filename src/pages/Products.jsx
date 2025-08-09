// src/pages/Products.jsx
import ProductCard from '../components/ProductCard';

const Products = () => {
  const productos = [
    {
      title: 'Producto 1',
      image: '/bag-classic.jpg',
      price: '10.000',
    },
    {
      title: 'Producto 2',
      image: '/coat-winter.jpg',
      price: '10.000',
    },
    {
      title: 'Producto 3',
      image: '/shoes-designer.jpg',
      price: '10.000',
    },
    {
      title: 'Producto 4',
      image: '/dress-haute.jpg',
      price: '10.000',
    },
  ];

  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif mb-8 text-[#1a1a1a]">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
