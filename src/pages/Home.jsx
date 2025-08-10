// src/pages/Home.jsx
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const destacados = [
    {
      title: 'Crema Antioxidante',
      image: '/crema.jpg',
      price: '10.000',
    },
    {
      title: 'Serum Retinol',
      image: '/serum.jpg',
      price: '10.000',
    },
    {
      title: 'Agus de Rosas',
      image: '/agua.jpg',
      price: '10.000',
    },
  ];

  return (
    <div className="pt-[80px] bg-[#f5f0e7]">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-serif mb-6 text-[#1a1a1a]">Destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destacados.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
